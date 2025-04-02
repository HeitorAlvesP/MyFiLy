import express from "express";
// import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Definição das rotas
// app.use("/users", userRoutes);

export default app;