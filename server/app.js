require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const DatabaseModel = require('./models/database.model');

const databaseModel = new DatabaseModel();

const viewPath = path.join(__dirname, './build/public');
const app = express();

app.use('/', express.static(path.join(__dirname, './build/public')));

// Em uma aplicação real pode ser necessário definir nas opções do CORS apenas os IPs que devem ter acesso à aplicação.
const corsOptions = {
  origin: '*',
};
app.use(cors(corsOptions));

// analisar requisições com variáveis codificadas na URL.
app.use(bodyParser.urlencoded({ extended: true }));
// analizar requisições com content-type = application/json
app.use(bodyParser.json());

const dbConnection = databaseModel.getDatabaseConnection();

// Somente use essa função se quiser que a tabela seja deletada toda vez que reiniciar a aplicação.
/*
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-synchronize db.');
});
*/

dbConnection.sequelizeConnector.sync().then(() => {
  console.log('Synchronizing DB.');
});

// Rota apontando para o documento HTML inicial do front-end.
app.get('/', (req, res) => {
  res.sendFile(`${viewPath}/index.html`);
});

require('./routes')(app);

// Usa a porta definida nas credenciais de ambiente. Caso não exista, será usada a porta definida abaixo.
// A porta só deve ser definida nas credenciais do projeto quando o projeto for rodado localmente. Rodando na Azure, a porta é definida automaticamente.
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
