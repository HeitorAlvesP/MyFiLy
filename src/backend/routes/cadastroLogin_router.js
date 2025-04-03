import { Router } from 'express';
import { resolve } from 'path';

const router = Router();

// Rota para servir o arquivo cadastro_login.html
router.get('/cadastro', (req, res) => {
    const cadastroPath = resolve('src/frontend/pages/cadastro_login.html');
    res.sendFile(cadastroPath);
});

export default router;