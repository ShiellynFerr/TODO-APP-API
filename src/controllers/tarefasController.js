
export const tarefas = (server) => {
  server.get('/tarefas', (req, res) => {
  res.send('<h1>Rota ativa com Get e recurso tarefas valores de tarefas devem ser retornados </h1>')
})}

export const tarefasPost = (server) => {
  server.post('/tarefas', (req, res) => {
    res.send('<h2>Rota POST tarefa ativada: tarefa adicionado ao banco de dados</h2>')
  })
}