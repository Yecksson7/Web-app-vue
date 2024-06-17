<template>
  <form @submit.prevent="post" class="form-container">
    <div class="mb-3">
      <label for="titulo" class="form-label">Título</label>
      <input type="text" class="form-control" id="titulo" v-model="newTask.titulo" required>
    </div>
    <div class="mb-3">
      <label for="colaborador" class="form-label">Colaborador</label>
      <input type="text" class="form-control colaborador-input" id="colaborador" v-model="newTask.colaborador" required>
    </div>
    <div class="mb-3">
      <label for="descripcion" class="form-label">Descripción</label>
      <textarea class="form-control" id="descripcion" rows="3" v-model="newTask.descripcion" required></textarea>
    </div>
    
    <button type="submit" class="btn btn-primary">Enviar</button>
    <div v-if="successMessage" class="alert alert-success mt-3">{{ successMessage }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();

const newTask = ref({
  titulo: '',
  descripcion: '',
  colaborador: ''
});

let successMessage = ''; // Variable para almacenar el mensaje de éxito

const post = async () => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newTask.value);
    console.log('Respuesta del servidor:', response.data);
    successMessage = 'Tarea creada exitosamente'; // Mostrar mensaje de éxito
    resetForm(); // Reiniciar el formulario después de enviar con éxito
  } catch (error) {
    console.error('Error al enviar la tarea:', error);
  }
};

const resetForm = () => {
  // Reiniciar los valores del formulario después del envío exitoso
  newTask.value.titulo = '';
  newTask.value.descripcion = '';
  newTask.value.colaborador = '';
};
</script>

<style scoped>
.form-container {
  background-color: black; /* Fondo negro para el formulario */
  padding: 20px; /* Espaciado interno */
  border-radius: 10px; /* Bordes redondeados */
}

.form-control {
  background-color: white; /* Fondo blanco para los campos de entrada */
  color: black; /* Texto negro */
}

.colaborador-input {
  width: 100px; /* Ancho específico para el input del colaborador */
}

.form-label {
  color: white; /* Texto de las etiquetas en blanco */
}

.btn {
  background-color: white; /* Botón con fondo blanco */
  color: black; /* Texto del botón en negro */
}

.alert {
  background-color: green; /* Fondo del mensaje de éxito */
  color: white; /* Texto del mensaje de éxito */
}
</style>
