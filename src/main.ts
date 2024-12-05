import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "./routes.js"
import './assets/styles/global.css';

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        // Si hay un hash (como #contacto), desplazarse a ese elemento
        return {
          el: to.hash,
          behavior: 'smooth', // Desplazamiento suave
        };
      } else if (savedPosition) {
        return savedPosition; // Si el usuario regresa, restaura la posición previa
      } else {
        return { top: 0 }; // Desplazar al inicio por defecto
      }
    },
  });

const app = createApp(App)
app.use(router);
app.mount('#app');
