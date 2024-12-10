<template>
  <div>
    
<!-- 
    <button @click="console.log('Clicked Español'); changeLocale('es')">Español</button>
    <button @click="console.log('Clicked English'); changeLocale('en')">English</button>
    <button @click="console.log('Clicked Português'); changeLocale('pt')">Português</button>
    <p>{{ t('helloWord') }}</p> -->


    <!-- <button @click="$i18n.locale = 'es'">Español (Directo)</button>
    <button @click="$i18n.locale = 'en'">English (Directo)</button>
    <p>{{ t('helloWord') }}</p> -->
  </div>
  <HomePage/>
  <OperatorL/>
  <TecData/>
  <ModelsL/>
  <PamphletL/>
  <ContactL/>
  <MapL/>
  <FooterL/>
  <BackToTop/>

  <!-- <button @click="changeLocale('es')">Español</button>
    <button @click="changeLocale('en')">English</button>
    <button @click="changeLocale('pt')">Português</button>
    <p>{{ t('helloWord') }}</p> -->

</template>

<script lang="ts" setup>

import { useI18n } from 'vue-i18n';

// Acceder a i18n a través de useI18n
const { t, locale } = useI18n();

// Función para cambiar el idioma
const changeLocale = (lang: string) => {
  console.log(`Cambiando idioma a: ${lang}`); // Verifica en la consola
  locale.value = lang;  // Cambiar idioma
  console.log(`Idioma actual: ${locale.value}`); // Verificar el idioma actual
};

import HomePage from './components/home/HomePage.vue';
import OperatorL from './components/operator/Operator-l.vue';
import TecData from './components/technical-data/Tec-Data.vue';
import ModelsL from './components/models/Models-l.vue';
import PamphletL from './components/pamphlet-L/Pamphlet-L.vue';
import ContactL from './components/Contact/Contact-L.vue';
import MapL from './components/map/Map-l.vue';
import FooterL from './components/footer/Footer-l.vue';
import BackToTop from './components/BackToTop.vue';



console.log(changeLocale,'arbol')


</script>

<style scoped>
html, body {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
}

</style>
