import express from "express";
import vagaRoutes from "./routes/vagas.js";
import { conectar } from "./database.js";
const app = express();

app.use(express.json());

app.use("/api/vagas", vagaRoutes);

conectar();

app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
