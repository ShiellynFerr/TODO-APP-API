import { bdTarefas } from "../infra/bd.js";

class Tarefas {
  constructor(titulo, descricao, status, dataDeCriacao) {
    this.id = bdTarefas.length + 1;
    this.titulo = titulo;
    this.descricao = descricao;
    this.status = status;
    this.dataDeCriacao = dataDeCriacao;
  }
}

export default Tarefas;
