import { Router } from 'express';
import CreateTransactionService from './../services/CreateTransactionService';
import Transaction from './../models/Transaction';

const routes = Router();

routes.get('/', (req, res) => {
  
});

routes.post('/', (req, res) => {
  const { title, value, type } = req.body;

  const transaction = new Transaction(title, value, type);

  return res.json(transaction);
});

export default routes;