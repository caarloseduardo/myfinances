import { api } from './utils/api';

import { TransactionInterface } from '../types/transaction';
import delay from '../utils/delay';

class TransactionsService {
  async listTransactions() {
    await delay(1000);

    return api.get('/transactions');
  }

  async createTransaction(data: TransactionInterface) {
    await delay(1000);

    return api.post('/transactions', data);
  }

  async updateTransaction(data: TransactionInterface, id: string) {
    await delay(1000);

    return api.put(`/transactions/${id}`, data);
  }

  async deleteTransaction(id: string) {
    await delay(1000);

    return api.delete(`/transactions/${id}`);
  }
}

export default new TransactionsService();
