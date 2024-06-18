<template>
    <form @submit.prevent="put" class="form-container">
      <div class="mb-3">
        <label for="titulo" class="form-label">Título</label>
        <input
          type="text"
          class="form-control"
          id="titulo"
          v-model="task.titulo"
          :placeholder="task.titulo"
          required
        />
      </div>
      <div class="mb-3">
        <label for="descripcion" class="form-label">Descripción</label>
        <textarea
          class="form-control"
          id="descripcion"
          rows="3"
          v-model="task.descripcion"
          :placeholder="task.descripcion"
          required
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
      <div v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</div>
    </form>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  import axios from 'axios';
  
  const router = useRouter();
  const route = useRoute();
  
  const task = ref({
    titulo: '',
    descripcion: '',
    colaborador: ''
  });
  
  const successMessage = ref('');
  
  const id = route.params.id;
  
  const getTask = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      task.value = response.data; 
    } catch (error) {
      console.error(error);
    }
  };
  
  onMounted(() => {
    if (id) {
      getTask();
    }
  });
  
  const put = async () => {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, task.value);
      console.log('Respuesta del servidor:', response.data);
      //successMessage.value = 'Tarea actualizada exitosamente';
      router.push('/listaTareas')
    } catch (error) {
      console.error('Error al enviar la tarea:', error);
    }
  };
  </script>
  
  <style scoped>
  .form-container {
    background-color: black;
    padding: 20px;
    border-radius: 10px;
  }
  
  .form-control {
    background-color: white;
    color: black;
  }
  
  .colaborador-input {
    width: 100px;
  }
  
  .form-label {
    color: white;
  }
  
  .btn {
    background-color: white;
    color: black;
  }
  
  .alert {
    background-color: green;
    color: white;
  }
  </style>
  
  