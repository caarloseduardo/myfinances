import React from 'react';

import { Form } from './styles';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';

const TransactionForm: React.FC = () => (
  <Form>
    <FormGroup>
      <Input
        placeholder="Descrição"
      />
    </FormGroup>

    <FormGroup>
      <Input
        placeholder="R$ 0,00"
      />
    </FormGroup>

    <FormGroup>
      <Input
        placeholder="12/17/2021"
      />
    </FormGroup>

    <FormGroup>
      <Select
        value="debit"
      >
        <option value="debit">Débito</option>
        <option value="credit">Crédito</option>
      </Select>
    </FormGroup>
  </Form>
);

export default TransactionForm;
