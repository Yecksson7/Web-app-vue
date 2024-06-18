import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import ListaTareas from './components/ListaTareas.vue';



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },

  


  {path:'/listaTareas', name:'ListaTareas', component:ListaTareas, meta:{requiresAdmin:true}},

  {path: '/edit/:id', name: 'EditTarea', component: () => import('./views/EditTareaView.vue')},

  
  {path: '/cargarTarea', name: 'CargaTarea', component: () => import('./views/CargarTareaView.vue')},
  {path: '/registro', name: 'registro', component: () => import('./views/LoginView.vue')},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next)=>{
  const user =JSON.parse(localStorage.getItem('user'));
  if(to.matched.some(record => record.meta.requiresAdmin)){
    if(user && user.role === 'admin'){
      next();
    }else{
      next('/Home')
    }
  }else
  {
    next();
  }
})


export default router;