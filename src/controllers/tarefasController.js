import Tarefas from "../models/tarefasModels.js";
import { bdTarefas } from "../infra/bd.js";

const tarefas = (server) => {
  server.get("/tarefas", (req, res) => {
    res.send(bdTarefas);
  });
  server.post("/tarefas", (req, res) => {
    const { titulo, descricao, status, dataDeCriacao } = req.body;

    const dataM = new Tarefas(titulo, descricao, status, dataDeCriacao);
    bdTarefas.push(dataM);
    res.send(bdTarefas);
  });
};

export default tarefas;
