<template>
  <div>
    <h1>Tareas cargadas</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">Titulo</th>
          <th scope="col">Contenido</th>
          <th scope="col">IdCreador</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="tarea in tareas" :key="tarea.id">
          <td>{{ tarea.id }}</td>
          <td>{{ tarea.title }}</td>
          <td>{{ tarea.body }}</td>
          <td>{{ tarea.userId }}</td>
          <td>
            <button type="button" class="btn btn-danger" @click="removeTarea(tarea.id)">Eliminar</button>
            <RouterLink :to="`/edit/${tarea.id}`" class="btn btn-secondary">Editar</RouterLink>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const tareas = ref([]);


const getTareas = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    tareas.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(getTareas);

const removeTarea = async (id) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
  } catch (error) {
    console.error(error);
  }
};
</script>


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4a1;
}

</style>