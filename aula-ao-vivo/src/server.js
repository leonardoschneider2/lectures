const app = require('./app');

app.listen(3001, console.log('App is running in port 3001'));

// docker stop $(docker ps -qa) - PARA TODOS OS CONTAINERS
// killall node - PARA TODOS OS CÓDIGOS NODE

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Chegou na rota \'/\'. ' });
});