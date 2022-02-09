import React, { FormEvent, useState, useRef } from 'react';

import { Form, ButtonsContainer } from './styles';

import { handleAmountMask } from '../../utils/masks';
import formatTransactionToService from '../../utils/formatTransactionToService';

import Loader from '../../components/Loader';
import FormGroup from '../FormGroup';
import Input from '../Input';
import InputMask from '../InputMask';
import Select from '../Select';

import TransactionsService from '../../services/TransactionsService';

import { TransactionInterface } from '../../types/transaction';

interface TransactionFormProps {
  isUpdatingTransaction?: boolean;
  descriptionValue?: string;
  amountValue?: string;
  dateValue?: string;
  optionValue?: string;
  buttonLabel: string;
  handleCloseModal: () => void;
  setTransactions: React.Dispatch<React.SetStateAction<TransactionInterface[]>>;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  isUpdatingTransaction,
  descriptionValue,
  amountValue,
  dateValue,
  optionValue,
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

      const { data } = await TransactionsService.createTransaction(transaction);

      setTransactions((prevState) => [...prevState, data]);
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
            value={descriptionValue}
            ref={descriptionInputRef}
            placeholder="Descrição"
          />
        </FormGroup>

        <FormGroup>
          <InputMask
            value={amountValue}
            ref={amountInputRef}
            maxLength={16}
            placeholder="R$ 0,00"
            handleChangeValue={() => handleAmountMask(amountInputRef)}
          />
        </FormGroup>

        <FormGroup>
          <Input
            value={dateValue}
            ref={dateInputRef}
            type="date"
            placeholder="12/17/2021"
          />
        </FormGroup>

        <FormGroup>
          <Select
            ref={optionSelectRef}
            defaultValue={optionValue}
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

TransactionForm.defaultProps = {
  isUpdatingTransaction: false,
  descriptionValue: '',
  amountValue: '',
  dateValue: '',
  optionValue: '',
};

export default TransactionForm;
