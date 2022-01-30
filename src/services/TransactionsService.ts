import { api } from './utils/api';

import { transactionInterface } from '../types/transaction';
import delay from '../utils/delay';

class TransactionsService {
  async listTransactions() {
    await delay(1000);

    return api.get('/transactions');
  }

  async createTransaction(payload: transactionInterface) {
    await delay(1000);

    return api.post('/transactions', payload);
  }
}

export default new TransactionsService();
