const DatabaseModel = require('../models/database.model');

const databaseModel = new DatabaseModel();
const dbConnection = databaseModel.getDatabaseConnection();

module.exports = class TaskController {
  constructor() {
    this.taskSequelizeModel = dbConnection.taskSequelizeModel;
    // "Sequelize.Op" é um objeto padrão do Sequelize que contém vários operadores para serem usados nas comparações das queries feitas pelo Sequelize.
    // Por exemplo: (and, or, in , like)
    this.sequelizeOperator = dbConnection.Sequelize.Op;
  }

  // Cria e salva uma nova task
  create(req, res) {
  // Valida uma requisição
    if (!req.body.name) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
      return;
    }

    // Cria uma task
    const task = {
      name: req.body.name,
      description: req.body.description,
      finished: req.body.finished ? req.body.finished : false,
    };

    // Salva uma task no banco de dados
    this.taskSequelizeModel.create(task)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
          err.message || 'Some error occurred while creating the this.taskSequelizeModel.',
        });
      });
  }

  // Retorna todas as tasks do banco de dados
  findAll(req, res) {
    const { name } = req.query;
    const condition = name ? { name: { [this.sequelizeOperator.like]: `%${name}%` } } : null;

    this.taskSequelizeModel.findAll({ where: condition })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
          err.message || 'Some error occurred while retrieving tasks.',
        });
      });
  }

  // retorna uma única task buscando pelo id
  findOne(req, res) {
    const { id } = req.params;

    this.taskSequelizeModel.findByPk(id)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error retrieving task with id=${id}`,
        });
      });
  }

  // Atualiza uma task pelo id recebido na requisição
  update(req, res) {
    const { id } = req.params;

    this.taskSequelizeModel.update(req.body, {
      where: { id },
    })
      .then((num) => {
        if (num[0] === 1) {
          res.send({
            message: 'this.taskSequelizeModel was updated successfully.',
          });
        } else {
          res.send({
            message: `Cannot update this.taskSequelizeModel with id=${id}. Maybe this.taskSequelizeModel was not found or req.body is empty!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Error updating this.taskSequelizeModel with id=${id}`,
        });
      });
  }

  // Deleta uma task pelo id recebido na requisição
  deleteTask(req, res) {
    const { id } = req.params;

    this.taskSequelizeModel.destroy({
      where: { id },
    })
      .then((num) => {
        if (num[0] === 1) {
          res.send({
            message: 'this.taskSequelizeModel was deleted successfully!',
          });
        } else {
          res.send({
            message: `Cannot delete this.taskSequelizeModel with id=${id}. Maybe this.taskSequelizeModel was not found!`,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: `Could not delete this.taskSequelizeModel with id=${id}`,
        });
      });
  }

  // Remove todas as tasks do banco de dados
  deleteAll(req, res) {
    this.taskSequelizeModel.destroy({
      where: {},
      truncate: false,
    })
      .then((nums) => {
        res.send({ message: `${nums} Tasks were deleted successfully!` });
      })
      .catch((err) => {
        res.status(500).send({
          message:
          err.message || 'Some error occurred while removing all tasks.',
        });
      });
  }

  // Retorna todas as tasks finalizadas
  findAllFinished(req, res) {
    this.taskSequelizeModel.findAll({ where: { finished: true } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
          err.message || 'Some error occurred while retrieving tasks.',
        });
      });
  }
};
