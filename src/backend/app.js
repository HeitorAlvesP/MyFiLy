import express from 'express';
import { resolve } from 'path';
import loginRouter from './routes/login_router.js';
import cadastroLoginRouter from './routes/cadastroLogin_router.js';
import esqueceuSenha from './routes/esqueceuSenha_router.js';


const app = express();

app.use(express.static(resolve('src/frontend')));
app.use(express.json());

app.use('/', loginRouter);
app.use('/', cadastroLoginRouter);
app.use('/', esqueceuSenha);

export default app;