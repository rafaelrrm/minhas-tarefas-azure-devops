<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Buscar pelo nome"
          v-model="name"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchName"
          >
            Buscar
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Lista de tarefas</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(task, index) in tasks"
          :key="index"
          @click="setActiveTask(task, index)"
        >
          {{ task.name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllTasks">
        Remover todas
      </button>
    </div>
    <div class="col-md-6">
      <div v-if="currentTask">
        <h4>Tarefa</h4>
        <div>
          <label><strong>Nome:</strong></label> {{ currentTask.name }}
        </div>
        <div>
          <label><strong>Descrição:</strong></label>
          {{ currentTask.description }}
        </div>
        <div>
          <label><strong>Status:</strong></label>
          {{ currentTask.finished ? "Finalizada" : "Pendente" }}
        </div>

        <router-link
          :to="'/tasks/' + currentTask.id"
          class="badge badge-warning"
          >Editar</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Selecione uma tarefa...</p>
      </div>
    </div>
  </div>
</template>

<script>
import TaskDataService from '../services/TaskDataService';

export default {
  name: 'tasks-list',
  data() {
    return {
      tasks: [],
      currentTask: null,
      currentIndex: -1,
      name: '',
    };
  },
  methods: {
    retrieveTasks() {
      TaskDataService.getAll()
        .then((response) => {
          this.tasks = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveTasks();
      this.currentTask = null;
      this.currentIndex = -1;
    },

    setActiveTask(task, index) {
      this.currentTask = task;
      this.currentIndex = index;
    },

    removeAllTasks() {
      TaskDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchName() {
      TaskDataService.findByName(this.name)
        .then((response) => {
          this.tasks = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveTasks();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
