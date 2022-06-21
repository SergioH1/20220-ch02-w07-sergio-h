import express from 'express';
import morgan from 'morgan';
import { dataRouter } from './router/dataRouter.js';
import homeRouter from './router/home.js';

export const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/', homeRouter);
app.use('/task', dataRouter);
