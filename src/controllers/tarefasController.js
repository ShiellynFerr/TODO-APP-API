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

  server.get("/tarefas/:id", (req, res) => {
    const tarefaBd = bdTarefas.filter((element) => element.id === +req.params.id)
    res.send(tarefaBd)
  })

  server.put("/tarfeas/:id", (req, res) => {
    const tarefaBd = bdTarefas.filter((element) => element.id === +req.params.id)
    tarefaBd.status = req.body.status;
    res.send(`Registro de ${tarefaBd.status} atualizado`);
  })

  server.delete("/tarefas/:id", (req, res) => {
        const tarefa = bdTarefas.find(task => task.id === req.params.id);
        const index = bdTarefas.indexOf(tarefa);
        bdTarefas.splice(index,1)
        res.send(bdTarefas)
  })
};

export default tarefas;
