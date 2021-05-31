<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Nome</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="task.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="task.description"
          name="description"
        />
      </div>

      <button @click="saveTask" class="btn btn-success">Submeter</button>
    </div>

    <div v-else>
      <h4>Submissão feita com sucesso!</h4>
      <button class="btn btn-success" @click="newTask">Adicionar</button>
    </div>
  </div>
</template>

<script>
import TaskDataService from "../services/TaskDataService";

export default {
  name: "add-task",
  data() {
    return {
      task: {
        id: null,
        name: "",
        description: "",
        finished: false,
      },
      submitted: false,
    };
  },
  methods: {
    saveTask() {
      const data = {
        name: this.task.name,
        description: this.task.description,
      };

      TaskDataService.create(data)
        .then((response) => {
          this.task.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newTask() {
      this.submitted = false;
      this.task = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
