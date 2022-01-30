export interface TransactionInterface {
  id?: string;
  amount: number;
  date: string | Date;
  description: string;
}
