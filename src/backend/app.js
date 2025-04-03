import express from 'express';
import { resolve } from 'path';
import loginRouter from './routes/login_router.js';

const app = express();

app.use(express.static(resolve('src/frontend')));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Recebida requisição: ${req.method} ${req.url}`);
    next();
});
app.use('/', loginRouter);

export default app;