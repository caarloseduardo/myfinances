import React, { useCallback, useEffect, useState } from 'react';
import {
  FiChevronLeft, FiChevronRight, FiTrendingUp, FiTrendingDown,
} from 'react-icons/fi';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlinePlus } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import formatNumberToCurrency from '../../utils/formatNumberToCurrency';
import formatDate from '../../utils/formatDate';

import { TransactionInterface } from '../../types/transaction';

import {
  Container, KpisContainer, KpiContainer, Table,
} from './styles';

import defaultTheme from '../../assets/styles/themes/default';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import TransactionForm from '../../components/TransactionForm';

import TransactionsService from '../../services/TransactionsService';

interface editTransactionDataInterface extends TransactionInterface {
  option: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionInterface[]>([]);
  const [editData, setEditData] = useState<editTransactionDataInterface>();
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);

  const loadTransactions = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await TransactionsService.listTransactions();
      setTransactions(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleOpenEditModal = useCallback((transactionData: TransactionInterface) => {
    const formattedTransactionData = {
      ...transactionData,
      option: transactionData.amount > 0 ? 'debit' : 'credit',
    };
    setEditData(formattedTransactionData);

    setIsEditModalVisible(true);
  }, []);

  const handleDeleteTransaction = useCallback(async (transactionId: string | undefined) => {
    try {
      setIsLoading(true);

      if (!transactionId) {
        throw new Error('Id is required');
      }

      await TransactionsService.deleteTransaction(transactionId);

      setTransactions((prevState) => prevState.filter((prevTransaction) => (
        prevTransaction.id !== transactionId
      )));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {isCreateModalVisible && (
        <Modal
          title="Nova transação"
        >
          <TransactionForm
            buttonLabel="Salvar"
            handleCloseModal={() => setIsCreateModalVisible(false)}
            setTransactions={setTransactions}
          />
        </Modal>
      )}

      {isEditModalVisible && (
        <Modal
          title="Editar transação"
        >
          <TransactionForm
            buttonLabel="Editar"
            editTransactionData={editData}
            handleCloseModal={() => setIsEditModalVisible(false)}
            setTransactions={setTransactions}
          />
        </Modal>
      )}

      <KpisContainer>
        <KpiContainer>
          <div className="symbol-container green">
            <AiOutlineArrowUp size={20} />
          </div>

          <span className="label-container">Renda</span>

          <div className="amount-container">
            <h1>
              R$
              {' '}
              {transactions.map((transaction) => (
                transaction.amount > 0 ? transaction.amount : 0
              ))
                .reduce((acc, current) => acc + current, 0)}

            </h1>
            <FiTrendingUp
              size={24}
              color={defaultTheme.colors.semantic.green}
            />
          </div>
        </KpiContainer>

        <KpiContainer>
          <div className="symbol-container red">
            <AiOutlineArrowDown size={20} />
          </div>

          <span className="label-container">Contas</span>

          <div className="amount-container">
            <h1>
              R$
              {' '}
              {transactions.map((transaction) => (
                transaction.amount < 0 ? transaction.amount : 0
              ))
                .reduce((acc, current) => acc + current, 0)}

            </h1>
            <FiTrendingDown
              size={24}
              color={defaultTheme.colors.semantic.red}
            />
          </div>
        </KpiContainer>

        <KpiContainer>
          <div className="symbol-container yellow">
            <AiOutlineArrowUp size={20} />
          </div>

          <span className="label-container">Saldo total</span>

          <div className="amount-container">
            <h1>
              R$
              {' '}
              {transactions.map((transaction) => transaction.amount)
                .reduce((acc, current) => acc + current, 0)}

            </h1>
            <FiTrendingUp
              size={24}
              color={defaultTheme.colors.semantic.yellow}
            />
          </div>
        </KpiContainer>
      </KpisContainer>

      <Table>
        <button
          type="button"
          onClick={() => setIsCreateModalVisible(true)}
          className="create-transaction-button"
        >
          <AiOutlinePlus
            size={20}
            color="#fff"
          />
        </button>

        <h1>Transações</h1>

        <div className="table-head">
          <div className="columns">
            <div className="column1" />
            <div className="column2">
              <span>Descrição</span>
            </div>
            <div className="column3">
              <span>Valor</span>
            </div>
            <div className="column4">
              <span>Data</span>
            </div>
            <div className="column5" />
            <div className="column6" />
          </div>
        </div>

        <div className="table-body">
          {transactions.map((transaction: TransactionInterface) => (
            <div className="row" key={transaction.id}>
              <div className="columns">
                <div className="column1">
                  {transaction.amount < 0
                    ? (
                      <AiOutlineArrowDown
                        size={18}
                        color={defaultTheme.colors.semantic.red}
                      />
                    )
                    : (
                      <AiOutlineArrowUp
                        size={18}
                        color={defaultTheme.colors.semantic.green}
                      />
                    )}
                </div>
                <div className="column2">
                  <span>{transaction.description}</span>
                </div>
                <div className="column3">
                  <span className={`amount ${transaction.amount < 0 ? 'red' : 'green'}`}>
                    {formatNumberToCurrency(transaction.amount)}
                  </span>
                </div>
                <div className="column4">
                  <span>{formatDate(transaction.date)}</span>
                </div>
                <div className="column5">
                  <HiOutlinePencilAlt
                    onClick={() => handleOpenEditModal(transaction)}
                    size={18}
                    color={defaultTheme.colors.secondary.light}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="column6">
                  <BiTrashAlt
                    onClick={() => handleDeleteTransaction(transaction.id)}
                    size={18}
                    color={defaultTheme.colors.secondary.light}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <footer>
          <span className="registers">
            {transactions.length}
            {transactions.length === 1 ? ' registro' : ' registros'}
          </span>
          <div className="paginator">
            <FiChevronLeft
              size={20}
              style={{ cursor: 'pointer' }}
            />
            <span>1 | 5</span>
            <FiChevronRight
              size={20}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </footer>
      </Table>
    </Container>
  );
};

export default Dashboard;
