
export const usuario = (server) =>{server.get('/usuario', (req, res) => {
  res.send('<h1>Rota ativa com Get e recurso usuário valores de usuário devem ser retornados </h1>')
})}