/* eslint-disable class-methods-use-this */
import { axiosBackendInstace } from '../api_connector';

class TaskDataService {
  getAll() {
    return axiosBackendInstace.get('/tasks');
  }

  get(id) {
    return axiosBackendInstace.get(`/tasks/${id}`);
  }

  create(data) {
    return axiosBackendInstace.post('/tasks', data);
  }

  update(id, data) {
    return axiosBackendInstace.put(`/tasks/${id}`, data);
  }

  delete(id) {
    return axiosBackendInstace.delete(`/tasks/${id}`);
  }

  deleteAll() {
    return axiosBackendInstace.delete('/tasks');
  }

  findByName(name) {
    return axiosBackendInstace.get(`/tasks?name=${name}`);
  }
}

export default new TaskDataService();
