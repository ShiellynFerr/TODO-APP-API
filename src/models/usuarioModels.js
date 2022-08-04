import { bdUsuarios } from "../infra/bd.js";

class usuarioM {
  constructor(nome, email, senha) {
    this.id = bdUsuarios.length + 1;
    this.nome = nome;
    this.email = email;
    this.senha = senha;
  }
}

export default usuarioM;
