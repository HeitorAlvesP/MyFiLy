import { Router } from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const router = Router();

// Obtém o diretório raiz do projeto
const __dirname = dirname(fileURLToPath(import.meta.url));

// Rota GET `/login` para servir o arquivo login.html
router.get('/login', (req, res) => {
    res.sendFile(join(__dirname, '../../frontend/pages/login.html'));
});

// Rota POST para processar o login
router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (email === 'teste@email.com' && senha === '123456') {
        res.json({ mensagem: 'Login bem-sucedido!' });
    } else {
        res.status(401).json({ erro: 'Credenciais inválidas' });
    }
});

export default router;