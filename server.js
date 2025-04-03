import app from "./src/backend/app.js";
import dotenv from "dotenv";
import { startServer } from './src/backend/dataBase/database.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

startServer().catch(err => console.error('Erro ao iniciar o servidor:', err));
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/login`);
});