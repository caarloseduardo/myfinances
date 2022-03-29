import React, { FormEvent, useState, useRef } from 'react';

import { Form, ButtonsContainer } from './styles';

import { handleAmountMask } from '../../utils/masks';
import formatTransactionToService from '../../utils/formatTransactionToService';
import formatNumberToCurrency from '../../utils/formatNumberToCurrency';

import Loader from '../../components/Loader';
import FormGroup from '../FormGroup';
import Input from '../Input';
import InputMask from '../InputMask';
import Select from '../Select';

import TransactionsService from '../../services/TransactionsService';

import { TransactionInterface } from '../../types/transaction';

interface editTransactionDataInterface extends TransactionInterface {
  option: string;
}

interface TransactionFormProps {
  editTransactionData?: editTransactionDataInterface;
  buttonLabel: string;
  handleCloseModal: () => void;
  setTransactions: React.Dispatch<React.SetStateAction<TransactionInterface[]>>;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  editTransactionData,
  buttonLabel,
  handleCloseModal,
  setTransactions,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const optionSelectRef = useRef<HTMLSelectElement>(null);

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (
      !descriptionInputRef.current
      || !amountInputRef.current
      || !dateInputRef.current
      || !optionSelectRef.current
    ) {
      return;
    }

    const transaction = formatTransactionToService(
      descriptionInputRef.current.value,
      amountInputRef.current.value,
      dateInputRef.current.value,
      optionSelectRef.current.value,
    );

    try {
      setIsLoading(true);

      const transactionService = editTransactionData?.id
        ? TransactionsService.updateTransaction(transaction, editTransactionData.id)
        : TransactionsService.createTransaction(transaction);

      const { data } = await transactionService;

      setTransactions((prevState) => [...prevState.filter((prevTransaction) => (
        prevTransaction.id !== data.id
      )), data]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);

      handleCloseModal();
    }
  }

  return (
    <>
      <Loader isLoading={isLoading} />

      <Form>
        <FormGroup>
          <Input
            ref={descriptionInputRef}
            defaultValue={editTransactionData?.description}
            placeholder="Descrição"
          />
        </FormGroup>

        <FormGroup>
          <InputMask
            ref={amountInputRef}
            defaultValue={formatNumberToCurrency(
              editTransactionData?.amount
                ? editTransactionData?.amount
                : 0,
            )}
            maxLength={16}
            placeholder="R$ 0,00"
            handleChangeValue={() => handleAmountMask(amountInputRef)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            ref={dateInputRef}
            defaultValue={
              editTransactionData
                ? new Date(editTransactionData.date).toLocaleDateString('en-CA')
                : ''
            }
            type="date"
            placeholder="12/17/2021"
          />
        </FormGroup>

        <FormGroup>
          <Select
            ref={optionSelectRef}
            defaultValue={editTransactionData?.option}
          >
            <option value="debit">Débito</option>
            <option value="credit">Crédito</option>
          </Select>
        </FormGroup>

        <ButtonsContainer>
          <button
            type="button"
            onClick={handleCloseModal}
            className="label-button"
          >
            <span>Cancelar</span>
          </button>
          <button
            type="submit"
            onClick={handleSubmitForm}
          >
            <span>{buttonLabel}</span>
          </button>
        </ButtonsContainer>
      </Form>
    </>
  );
};

export default TransactionForm;
