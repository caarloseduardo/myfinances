import React, { useCallback, useEffect, useState } from 'react';
import {
  FiChevronLeft, FiChevronRight, FiTrendingUp, FiTrendingDown,
} from 'react-icons/fi';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlinePlus } from 'react-icons/ai';
import { BiTrashAlt } from 'react-icons/bi';
import { HiOutlinePencilAlt } from 'react-icons/hi';

import formatNumberToCurrency from '../../utils/formatNumberToCurrency';
import formatDate from '../../utils/formatDate';

import {
  Container, KpisContainer, KpiContainer, Table,
} from './styles';

import defaultTheme from '../../assets/styles/themes/default';

import Loader from '../../components/Loader';
import Modal from '../../components/Modal';
import TransactionForm from '../../components/TransactionForm';

import TransactionsService from '../../services/TransactionsService';

const Dashboard: React.FC = () => {
  interface transactionType {
    amount: number;
    date: string;
    description: string;
    id: string;
  }

  const [transactions, setTransactions] = useState<transactionType[]>([]);
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

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {isEditModalVisible && (
        <Modal
          title="Editar transação"
          buttonLabel="Editar"
        />
      )}

      {isCreateModalVisible && (
      <Modal
        title="Nova transação"
        buttonLabel="Salvar"
      >
        <TransactionForm
          buttonLabel="Salvar"
          handleCloseModal={() => setIsCreateModalVisible(false)}
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
          {transactions.map((transaction: transactionType) => (
            <div className="row" key={transaction.id}>
              <div className="columns">
                <div className="column1">
                  <AiOutlineArrowDown
                    size={18}
                    color={defaultTheme.colors.semantic[transaction.amount < 0 ? 'red' : 'green']}
                  />
                </div>
                <div className="column2">
                  <span>{transaction.description}</span>
                </div>
                <div className="column3">
                  <span className="amount red">
                    {formatNumberToCurrency(transaction.amount)}
                  </span>
                </div>
                <div className="column4">
                  <span>{formatDate(transaction.date)}</span>
                </div>
                <div className="column5">
                  <HiOutlinePencilAlt
                    onClick={() => setIsEditModalVisible(true)}
                    size={18}
                    color={defaultTheme.colors.secondary.light}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className="column6">
                  <BiTrashAlt
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
