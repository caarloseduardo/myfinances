import { api } from './utils/api';

class TransactionsService {
  async listTransactions() {
    return api.get('/transactions');
  }
}

export default new TransactionsService();
