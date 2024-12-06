<template>
    <div>
        <button class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
    </button>
      <!-- Menú móvil -->
      <nav class="mobile-menu" :class="{ open: isMenuOpen }">
        <img class="white-logo" src="../../assets/iso_blanco.svg" alt="" width="30px">
        <ul>
          <li><router-link to="/#home" @click="closeMenu">HOME</router-link></li>
          <li><router-link to="/#operator" @click="closeMenu">FUNCIONAMIENTO</router-link></li>
          <li><router-link to="/#technical-data" @click="closeMenu">DATOS TÉCNICOS</router-link></li>
          <li><router-link to="/#contacto" @click="closeMenu">CONTACTO</router-link></li>
        </ul>
        <div class="slash"></div>
        <div class="languages-l">
            <img class="languages" src="../../assets/castellano.jpg" alt="">
            <img class="languages" src="../../assets/ingles.jpg" alt="">
            <img class="languages" src="../../assets/portugues.jpg" alt="">
        </div>
      </nav>
    </div>
  </template>
  
  <script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
function closeMenu() {
  isMenuOpen.value = false;
}

</script>

  
  <style scoped>
  
  /* Estilos del botón "hamburguesa" */

    .hamburger.open span:nth-child(1) {
    transform: rotate(45deg) translateY(6px);
    }

    .hamburger.open span:nth-child(2) {
    opacity: 0; /* Oculta la barra del medio */
    }

    .hamburger.open span:nth-child(3) {
    transform: rotate(-45deg) translateY(-6px);
    }
    
    .hamburger {
  position: relative;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 1100; /* Asegura que esté por encima del menú */
  background-color: transparent; /* Fondo transparente */
  border: none; /* Sin bordes */
  outline: none; /* Elimina el contorno al hacer clic */
}
.slash {
  width: 300px;
  height: 1px;
  background-color: #FFFFFF;
  margin-top: 4vw;
}
.languages {
    display: flex;
    margin: 10px;
}

.white-logo {
    width: 150px;
    display: flex;
    justify-content: left;
    height: 80px;
    align-self: flex-start;
    background: transparent;
}

.languages-l {
    display: flex;
    align-self: center;
    margin: 30px;
}
  
  .hamburger span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #FFFFFF;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  
  /* Estilos del menú móvil */
  .mobile-menu {
position: fixed;
  top: -50%; /* Oculto en la parte superior */
  left: 0;
  width: 100%;
  height: auto;
  background-color: #10395F;; /* Fondo oscuro */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: top 0.3s ease; /* Animación al abrir */
  z-index: 1000;
  }
  
.mobile-menu.open {
  top: 0; /* Mostrar el menú */
}

.mobile-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Espacio entre los enlaces */
}

.mobile-menu ul li a {
  text-decoration: none;
  color: #C9D2DB; 
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease;
}

.mobile-menu ul li a:hover {
  color: #FFFFFF; /* Color de hover */
}

  @media (min-width: 700px) {
  .hamburger {
    display: none;
  }

  .mobile-menu {
    display: none; /* El menú móvil no se necesita en pantallas grandes */
  }
}
  </style>
  