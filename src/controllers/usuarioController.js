import usuarioM from "../models/usuarioModels.js";
import { bdUsuarios } from "../infra/bd.js";

const usuario = (server) => {
  server.get("/usuario", (req, res) => {
    res.send(bdUsuarios);
  });
    server.post("/usuario", (req, res) => {
      const {nome, email, senha} = req.body;

      const dataM = new usuarioM(nome, email, senha)
      bdUsuarios.push(dataM);
      res.send(bdUsuarios)
    });

    server.get("/usuario/")
};

export default usuario
