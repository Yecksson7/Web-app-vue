
<template>


    <form @submit.prevent="login">
    <div class="mb-3">
      <label for="usuario" class="form-label">Email address</label>
      <input type="text" class="form-control" v-model="post.usuario" required>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="text" class="form-control" v-model="post.password" required>
      
    </div>
    <button type="submit">Envia</button>
    </form>
    
    </template>
    
    
    
    <script setup>
    
    import {ref} from 'vue';
    import { useRouter} from 'vue-router';
    
    const post = ref({
        usuario: '',
        password: ''
    })

    const errormsg = ref('')
    
   // const route = useRoute();  //nos permite acceder a la ruta actual
    
    
    const router = useRouter();
    
    
    const login =() => {
      if(usuario.value==='admin'&& password.value==='admin'){
        localStorage.setItem('user', JSON.stringify({role: 'admin'}))
        router.push('/listaTareas')
      }else if(usuario.value ==='user' && password.value==='user')
      {
        localStorage.setItem('user', JSON.stringify({role:'user'}))
        router.push('/')
      } 
      else
      {
        errormsg.value = 'usuario o contraseña incorrecta'
      }     
    }
    </script>
    <style>
    
  </style>
    