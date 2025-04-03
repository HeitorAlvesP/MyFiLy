import express from 'express';
import loginRouter from './routes/login_router.js';
import cadastroLoginRouter from './routes/cadastroLogin_router.js';
import esqueceuSenha from './routes/esqueceuSenha_router.js';
import { resolve } from 'path';

const app = express();

app.use(express.static(resolve('src/frontend')));
app.use(express.json());

app.use('/', loginRouter);
app.use('/', cadastroLoginRouter);
app.use('/', esqueceuSenha);

export default app;