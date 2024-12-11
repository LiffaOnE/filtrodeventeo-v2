<template>
    <div class="backgroundNav">
        <img class="image-logo" src="../../assets/logofiltro+bertot.svg" alt="">
        <img class="large-header" src="../../assets/fdo_header.jpg" alt="">
        <div class="languages-l">
          <img class="languages" src="../../assets/castellano.jpg" alt="Español" @click="changeLocale('es')">
          <img class="languages" src="../../assets/ingles.jpg" alt="English" @click="changeLocale('en')">
          <img class="languages" src="../../assets/portugues.jpg" alt="Português" @click="changeLocale('pt')">
    </div>
        <MobileMenu/>
    </div>
</template>

<script lang="ts" setup>

import MobileMenu from './MobileMenu.vue';

import { useI18n } from 'vue-i18n';

// Usar la instancia de i18n
const { locale } = useI18n();

// Función para cambiar el idioma
const changeLocale = (lang: string) => {
  locale.value = lang;  // Cambiar el idioma de la aplicación
  localStorage.setItem('locale', lang); // Guardar el idioma seleccionado en localStorage
};

</script>

<style scoped>

.image-logo {
  width: 30%;
  height: auto;
  align-self: center;
}

.large-header {
    display: flex;
    width: 750px;
    height: 100%;
}

.backgroundNav {
    display: flex;
    width: 100%;
    background-color: #10395F;
    height: 130px;
}

.languages {
    display: flex;
    margin: 10px;
    cursor: pointer;
}

.languages-l {
    display: block;
    align-self: center;
    margin: 6vw;
}

/* Para móviles pequeños (smartphones en modo vertical) */
@media (max-width: 480px) {
  .backgroundNav {
    width: 100%;
    background-color: #0F395F;
    display: flex;
    justify-content: space-evenly; /* Centra los elementos dentro de la navbar */
    align-items: center; /* Centra el logo verticalmente */
    height: 90px; /* Ajusta la altura automáticamente */
  }
  .languages-l .languages {
    width: 100%;
    height: auto;
  }

  .large-header {
    display: flex;
    width: 50%;
    height: 100%;
}

  /* Mostrar solo el logo y ocultar los demás elementos */
  .image-logo {
    width: 330px;
    display: block; 
    margin-left: -15vw;
    background: transparent;
  }
  .image-logo img {
    width: 350px;
  }

  .large-header, 
  .languages-l {
    display: none; /* Ocultar los otros elementos */
  }
}

/* Para pantallas grandes de escritorio (monitores UHD) */
@media (min-width: 1920px) {
  .backgroundNav {
    width: 100%;
  }
}

</style>
