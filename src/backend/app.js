import express from 'express';
import loginRouter from './routes/login_router.js';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(express.json());

// Obtém o diretório raiz corretamente
const __dirname = dirname(fileURLToPath(import.meta.url));

// Servir arquivos estáticos (CSS, JS, imagens, HTML)
app.use(express.static(join(__dirname, '../frontend')));

// Definir rotas
app.use('/', loginRouter);

export default app;