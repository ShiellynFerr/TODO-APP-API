import express from "express";
const server = express();

import { tarefas, tarefasPost} from "./controllers/tarefasController.js";
import { usuario, usuarioPost } from "./controllers/usuarioController.js";


usuario(server);
tarefas(server);

usuarioPost(server);
tarefasPost(server);



server.listen(4000, () => {
  console.log('Servidor de pé em: http://localhost:4000');
})