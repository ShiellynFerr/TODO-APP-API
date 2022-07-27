
export const tarefas = (server) => {
  server.get('/tarefas', (req, res) => {
  res.send('<h1>Rota ativa com Get e recurso tarefas valores de tarefas devem ser retornados </h1>')
})}