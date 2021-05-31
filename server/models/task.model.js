module.exports = class TaskModel {
  static getTask(sequelize, Sequelize) {
    // taskSequelizeModel é uma função. É um model do Sequelize.
    const taskSequelizeModel = sequelize.define('task', {
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      finished: {
        type: Sequelize.BOOLEAN,
      },
    });

    return taskSequelizeModel;
  }
};
