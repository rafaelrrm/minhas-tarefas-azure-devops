const Sequelize = require('sequelize');
const TaskModel = require('./task.model.js');

module.exports = class DatabaseModel {
  constructor() {
    this.dbHostname = process.env.DB_HOSTNAME;
    this.dbUsername = process.env.DB_USERNAME;
    this.dbPassword = process.env.DB_PASSWORD;
    this.databaseName = process.env.DB_DATABASE;
    this.sequelizeConnector = this.getSequelizeConnector();
  }

  getSequelizeConnector() {
    const sequelizeConnector = new Sequelize(this.databaseName, this.dbUsername, this.dbPassword, {
      host: this.dbHostname,
      dialect: 'mssql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
      // As configurações específicas do Sequelize para o Microsoft SQL Server ficam na propriedade "dialectOptions".
      dialectOptions: {
        // A propriedade "options" é obrigatória quando usamos o Sequelize com o Microsoft SQL Server. No entando, pode deixar vazio.
        options: {
          // Insira aqui as suas opções do Tedious.
          // useUTC: false,
          // dateFirst: 1,
        },
      },
      define: {
        schema: process.env.DB_ENV_SCHEMA,
      },
    });
    return sequelizeConnector;
  }

  getDatabaseConnection() {
    const dbConnection = {};

    const taskSequelizeModel = TaskModel.getTask(this.sequelizeConnector, Sequelize);

    dbConnection.taskSequelizeModel = taskSequelizeModel;

    dbConnection.Sequelize = Sequelize;
    dbConnection.sequelizeConnector = this.sequelizeConnector;
    return dbConnection;
  }
};
