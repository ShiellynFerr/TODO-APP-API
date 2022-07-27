import express from "express";
import { tarefas } from "./controllers/tarefasController.js";
import { usuario } from "./controllers/usuarioController.js";

const server = express();

server.listen(4000, () => {
  console.log('Servidor de pé em: http://localhost:4000');
})