const router = require('express').Router();
const TaskController = require('./controllers/task.controller.js');

module.exports = (app) => {
  const taskController = new TaskController();

  // Cria uma nova tasks
  router.post('/', taskController.create.bind(taskController));

  // retorna todas as tasks
  router.get('/', taskController.findAll.bind(taskController));

  // Retorna todas as tarefas concluídas
  router.get('/finished', taskController.findAllFinished.bind(taskController));

  // retorna uma única task usando o id
  router.get('/:id', taskController.findOne.bind(taskController));

  // atualiza uma task usando o id
  router.put('/:id', taskController.update.bind(taskController));

  // deleta uma taks usando o id
  router.delete('/:id', taskController.deleteTask.bind(taskController));

  // deleta todas as tasks
  router.delete('/', taskController.deleteAll.bind(taskController));

  app.use('/api/tasks', router);
};
