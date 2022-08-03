export const usuario = (server) => {
  server.get("/usuario", (req, res) => {
    res.send(
      "<h1>Rota ativa com Get e recurso usuário valores de usuário devem ser retornados </h1>"
    );

    server.post("/usuario", (req, res) => {
      res.send(
        "<h2>Rota POST usuario ativada: usuario adicionado ao banco de dados</h2>"
      );
    });
  });
};
