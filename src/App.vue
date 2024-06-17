<template>
  
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Home</router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="activo">
            <router-link to="/cargarTarea" class="nav-link">Cargar tareas</router-link>
          </li>
          <li class="nav-item" v-if="activo">
            <router-link to="/listaTareas" class="nav-link">Tareas cargadas</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/registro" class="nav-link" v-if="!activo">Ingreso</router-link>
          </li>
          <li class="nav-item" v-if="activo">
            <button @click="logout" class="nav-link btn btn-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>

 

  <div>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();
const activo = ref(false);

const checkAuth = () => {
  activo.value = !!localStorage.getItem('user');
};

const logout = () => {
  localStorage.removeItem('user');
  checkAuth();
  router.push('/');
};

onMounted(() => {
  checkAuth();

  // Listen to the custom event for login
  window.addEventListener('user-logged-in', checkAuth);
});
</script>

<style scoped>
html, body {
  background-color: green;
  margin: 0;
  padding: 0;
  height: 100%;}
</style>

