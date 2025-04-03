import express from 'express';
import loginRouter from './routes/login_router.js';
import cadastroLoginRouter from './routes/cadastroLogin_router.js';
// import { join, dirname } from 'path';
// import { fileURLToPath } from 'url';
import { resolve } from 'path';

const app = express();

// Obtém o diretório raiz corretamente
// const __dirname = dirname(fileURLToPath(import.meta.url));

// Servir arquivos estáticos (CSS, JS, imagens, HTML)
app.use(express.static(resolve('src/frontend')));
app.use(express.json());

// Definir rotas
app.use('/', loginRouter);
app.use('/', cadastroLoginRouter);

export default app;