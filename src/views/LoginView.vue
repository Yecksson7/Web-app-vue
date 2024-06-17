<template>
  <form @submit.prevent="login" class="login-form">
    <div class="mb-3">
      <label for="usuario" class="form-label">Email</label>
      <input type="text" id="usuario" class="form-control" v-model="post.usuario" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" id="password" class="form-control" v-model="post.password" required>
    </div>
    <button type="submit">Envia</button>
    <div v-if="errormsg" class="text-danger">{{ errormsg }}</div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const post = ref({
  usuario: '',
  password: ''
});

const errormsg = ref('');

const router = useRouter();

const login = () => {
  if (post.value.usuario === 'admin' && post.value.password === 'admin') {
    localStorage.setItem('user', JSON.stringify({ role: 'admin' }));
    window.dispatchEvent(new CustomEvent('user-logged-in'))
    router.push('/listaTareas');
    
  } else if (post.value.usuario === 'user' && post.value.password === 'user') {
    localStorage.setItem('user', JSON.stringify({ role: 'user' }));
    window.dispatchEvent(new CustomEvent('user-logged-in'))
    router.push('/');
    
  } else {
    errormsg.value = 'Usuario o contraseña incorrecta';
  }

};
</script>

<style scoped>


.login-form {
  background-color: #333; /* Color de fondo oscuro */
  color: white; /* Color de texto blanco */
  padding: 20px; /* Espaciado interno */
  width: 300px; /* Ancho del formulario */
  margin: auto; /* Centrar horizontalmente */
  margin-top: 100px; /* Margen superior */
  border-radius: 8px; /* Bordes redondeados */
}

.login-form label {
  font-weight: bold; /* Texto en negrita */
}

.login-form input[type="text"],
.login-form input[type="password"],
.login-form button {
  width: 100%; /* Ancho completo */
  margin-bottom: 10px; /* Margen inferior */
  padding: 8px; /* Espaciado interno */
  box-sizing: border-box; /* Incluir padding y borde en el ancho total */
}

.login-form button {
  background-color: #4CAF50; /* Color de fondo verde */
  color: white; /* Color de texto blanco */
  border: none; /* Sin borde */
  cursor: pointer; /* Cambiar cursor al pasar por encima */
}

.login-form button:hover {
  background-color: #45a049; /* Color de fondo verde oscuro al pasar por encima */
}

.text-danger {
  color: red; /* Color de texto rojo para mensajes de error */
}
</style>
