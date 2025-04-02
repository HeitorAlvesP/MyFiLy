import app from "./src/backend/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor ligado em http://localhost:${PORT}`);
});