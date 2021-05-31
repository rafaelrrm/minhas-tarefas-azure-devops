<template>
  <div v-if="currentTask" class="edit-form">
    <h4>Tarefa</h4>
    <form>
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentTask.name"
        />
      </div>
      <div class="form-group">
        <label for="description">Descrição</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentTask.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentTask.finished ? "Finalizada" : "Pendente" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentTask.finished"
      @click="updateFinished(false)"
    >
      Não Completa
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updateFinished(true)"
    >
      Completar
    </button>

    <button class="badge badge-danger mr-2" @click="deleteTask">Remover</button>

    <button type="submit" class="badge badge-success" @click="updateTask">
      Atualizar
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Selecione uma tarefa...</p>
  </div>
</template>

<script>
import TaskDataService from '../services/TaskDataService';

export default {
  name: 'task',
  data() {
    return {
      currentTask: null,
      message: '',
    };
  },
  methods: {
    getTask(id) {
      TaskDataService.get(id)
        .then((response) => {
          this.currentTask = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateFinished(status) {
      const data = {
        id: this.currentTask.id,
        name: this.currentTask.name,
        description: this.currentTask.description,
        finished: status,
      };

      TaskDataService.update(this.currentTask.id, data)
        .then((response) => {
          this.currentTask.finished = status;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateTask() {
      TaskDataService.update(this.currentTask.id, this.currentTask)
        .then((response) => {
          console.log(response.data);
          this.message = 'Tarefa atualizada com sucesso!';
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteTask() {
      TaskDataService.delete(this.currentTask.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: 'tasks' });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getTask(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
