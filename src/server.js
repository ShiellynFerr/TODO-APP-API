import express from "express";
const server = express();
server.use(express.json());

import tarefas from "./controllers/tarefasController.js";
import usuario  from "./controllers/usuarioController.js";

usuario(server);
tarefas(server);

server.listen(4000, () => {
  console.log("Servidor de pé em: http://localhost:4000");
});
