import Transaction from './../models/Transaction';

export default class TransactionRepository {
  private transactions: Array<Transaction> = [];

  all() {
    return this.transactions;
  }

  create (transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }
}