import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Home from './components/Home.vue';
import FormView from './views/FormView.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },

  { path: '/posts', name: 'posts', component: () => import('./views/PostView.vue') },
  
  { path: '/post/:id', name: 'PostDetail', component: () => import('./views/PostDetail.vue') },
  
  { path: '/form', name: 'form', component: FormView },
  { path: '/form/:id', component: FormView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;