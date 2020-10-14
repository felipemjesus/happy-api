import express, { request } from 'express';
import path from 'path';
import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.join(__dirname, '..', 'storage', 'uploads')));
app.use(errorHandler);

app.listen(3333);
