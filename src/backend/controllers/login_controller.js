import { getDatabase } from '../dataBase/database.js';

export const realizaLogin = async (req, res) => {
    const db = getDatabase();
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
    }

    try {
        const user = await db.get(`SELECT * FROM User WHERE email = ? AND senha = ?`, [email, senha]);
        console.log(user);

        if (user) {
            console.log('Aqui');
            return res.json({ success: true });
            // res.redirect('/html/telas_home/homeAdm.html');
        } else {
            console.log('Aqui errado')
            return res.status(401).json({ success: false, message: 'Email ou senha incorretos.' });
            // res.status(401).json({ message: 'Email ou senha incorretos.' });   
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao realizar login', error });
    }
};