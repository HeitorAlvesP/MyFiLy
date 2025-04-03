import { Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { realizaLogin } from '../controllers/login_controller.js';

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get('/login', (req, res) => {
    res.sendFile(join(__dirname, '../../frontend/pages/login.html'));
});

router.post('/login', realizaLogin)

router.get('/esqueceuSenha', (req, res) => {
    const cadastroPath = resolve('src/frontend/pages/');
    res.sendFile(cadastroPath);
});

router.get('/cadastro', (req, res) => {
    const cadastroPath = resolve('src/frontend/pages/cadastro_login.html');
    res.sendFile(cadastroPath);
});


export default router;