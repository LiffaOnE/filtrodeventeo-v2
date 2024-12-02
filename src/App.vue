<template>
  <div class="container">
    <RouterView/>
  </div>
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
import { RouterView } from 'vue-router';

</script>

<style scoped>

</style>
