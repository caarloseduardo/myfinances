import { api } from './utils/api';

import delay from '../utils/delay';

class TransactionsService {
  async listTransactions() {
    await delay(1000);

    return api.get('/transactions');
  }
}

export default new TransactionsService();
