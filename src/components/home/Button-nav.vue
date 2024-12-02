<template>
    <div class="buttons-nav">
        <button class="button-color">
            <!-- <router-link to="/home">Ir a HomePage</router-link>
            <router-link to="/operator">Ir a Operator</router-link>
<router-link to="/technical-data">Ir a TecData</router-link> -->
            <!-- <RouterLink to="./HomePage.vue">HOME</RouterLink> -->
        </button>
        <!-- <button class="button-color">
            <RouterLink to="./../operator/Operator-l.vue">FUNCIONAMIENTO</RouterLink>
        </button> -->
        <button class="button-color">
            <!-- DATOS TÉCNICOS -->
            <RouterLink to="./../technical-data/Tec-Data.vue">datos</RouterLink>
        </button>
        <button class="button-color">
            CONTACTO
        </button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.button-color {
    color: #10395F;
    text-decoration: none;
    border: 0;
    background-color: transparent;
}

.buttons-nav {
    width: 1440px;
    height: 54px;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    color: #10395F;
}

@media (max-width: 480px) {
  .buttons-nav {
    display: none;
  }
}

</style>
