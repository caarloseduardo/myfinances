import React, { FormEvent, useRef } from 'react';

import { Form, ButtonsContainer } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

interface TransactionFormProps {
  buttonLabel: string;
  handleCloseModal: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({
  buttonLabel, handleCloseModal,
}) => {
  const descriptionInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const optionSelectRef = useRef<HTMLSelectElement>(null);

  function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    console.log(descriptionInputRef.current?.value);
    console.log(amountInputRef.current?.value);
    console.log(dateInputRef.current?.value);
    console.log(optionSelectRef.current?.value);
  }

  return (
    <Form>
      <FormGroup>
        <Input
          ref={descriptionInputRef}
          placeholder="Descrição"
        />
      </FormGroup>

      <FormGroup>
        <Input
          ref={amountInputRef}
          placeholder="R$ 0,00"
        />
      </FormGroup>

      <FormGroup>
        <Input
          ref={dateInputRef}
          placeholder="12/17/2021"
        />
      </FormGroup>

      <FormGroup>
        <Select
          ref={optionSelectRef}
          defaultValue="debit"
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
  );
};

export default TransactionForm;
