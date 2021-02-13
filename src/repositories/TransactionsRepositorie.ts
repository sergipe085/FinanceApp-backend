import Transaction from './../models/Transaction';

interface Balance {
  income: number,
  outcome: number,
  total: number
}

export default class TransactionRepository {
  private transactions: Array<Transaction> = [];

  all() {
    return this.transactions;
  }

  create (transaction: Transaction): Transaction {
    this.transactions.push(transaction);
    return transaction;
  }

  getBalance(): Balance {
    const { income, outcome } = this.transactions.reduce((accumulator, transaction) => {

      accumulator.income += transaction.type == 'income' ? transaction.value : 0;
      accumulator.outcome += transaction.type == 'outcome' ? transaction.value : 0;

      return accumulator;
    }, {
      income: 0,
      outcome: 0,
      total: 0,
    })

    const total = income - outcome;

    return {
      income,
      outcome,
      total
    }
  }
}