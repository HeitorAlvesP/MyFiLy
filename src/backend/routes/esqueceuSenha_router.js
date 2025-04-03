import { Router } from 'express';
import { resolve } from 'path';

const router = Router();

router.get('/esqueceuSenha', (req, res) => {
    const cadastroPath = resolve('src/frontend/pages/');
    res.sendFile(cadastroPath);
});

export default router;