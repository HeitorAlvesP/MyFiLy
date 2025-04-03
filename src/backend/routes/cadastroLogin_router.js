import { Router } from 'express';
import { resolve } from 'path';

const router = Router();

router.get('/cadastro', (req, res) => {
    const cadastroPath = resolve('src/frontend/pages/cadastro_login.html');
    res.sendFile(cadastroPath);
});

export default router;