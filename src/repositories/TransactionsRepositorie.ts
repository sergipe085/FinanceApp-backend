import Transaction from './../models/Transaction';

export default class TransactionRepository {
  private transactions: Array<Transaction> = [];

  create (transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }
}