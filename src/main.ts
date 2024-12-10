import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "./routes.js"
import './assets/styles/global.css';
import { createI18n } from 'vue-i18n';

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

  const messages = {
    en: { helloWord: 'Hello, World!' },
    es: { helloWord: '¡Hola, Mundo!' },
    pt: { helloWord: 'Olá, Mundo!' },
  };
  
  // Crear instancia de i18n
  const i18n = createI18n({
    legacy: false,  // Modo Composition API
    locale: 'en',  // Idioma predeterminado
    fallbackLocale: 'en',  // Idioma de respaldo
    messages, // Mensajes para los idiomas
  });

const app = createApp(App)
app.use(i18n);
app.use(router);
app.mount('#app');
