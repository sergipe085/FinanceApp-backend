import { Router } from 'express';
import CreateTransactionService from './../services/CreateTransactionService';
import TransactionRepository from './../repositories/TransactionsRepositorie';
import Transaction from './../models/Transaction';

const routes = Router();

const transactionRepository = new TransactionRepository();

routes.get('/', (req, res) => {
  const transactions = transactionRepository.all();
  const balance = transactionRepository.getBalance();

  return res.json({transactions, balance});
});

routes.post('/', (req, res) => {
  const { title, value, type } = req.body;

  const createTransaction = new CreateTransactionService(transactionRepository);

  return res.json(createTransaction.execute({title, value, type}));
});

export default routes;