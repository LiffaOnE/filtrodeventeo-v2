<template>
  <HomePage/>
  <OperatorL/>
  <TecData/>
  <ModelsL/>
  <PamphletL/>
  <ContactL/>
  <MapL/>
  <FooterL/>

</template>

<script lang="ts" setup>

import HomePage from './components/home/HomePage.vue';
import OperatorL from './components/operator/Operator-l.vue';
import TecData from './components/technical-data/Tec-Data.vue';
import ModelsL from './components/models/Models-l.vue';
import PamphletL from './components/pamphlet-L/Pamphlet-L.vue';
import ContactL from './components/Contact/Contact-L.vue';
import MapL from './components/map/Map-l.vue';
import FooterL from './components/footer/Footer-l.vue';

</script>

<style scoped>
html, body {
  font-family: 'Roboto Condensed', sans-serif;
  margin: 0;
  padding: 0;
}

</style>
