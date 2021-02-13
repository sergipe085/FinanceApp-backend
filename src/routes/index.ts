import { Router } from 'express';
import transictionRoutes from './transactions.routes';

const routes = Router();

routes.use('/transactions', transictionRoutes);

export default routes;