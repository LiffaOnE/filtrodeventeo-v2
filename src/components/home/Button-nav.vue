<template>
    <div class="buttons-nav">
        <button class="button-color"></button>
        <button class="button-color">
            <Router-link to="/#home">HOME</Router-link>
        </button>
        <button class="button-color">
            <RouterLink to="/#operator">FUNCIONAMIENTO</RouterLink>
        </button>
        <button class="button-color">
            <RouterLink to="/#technical-data">DATOS TÉCNICOS</RouterLink>
        </button>
        <button class="button-color">
            <RouterLink to="/#contacto">CONTACTO</RouterLink>
        </button>
        <button class="button-color"></button>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.button-color {
    color: #989797;
    text-decoration: none;
    border: 0;
    background-color: transparent;
    font-size: 15px;
}

a {
    all: unset;
}

.button-color:hover {
    color: #10395F;
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
  .hamburger {
    display: none;
  }

  .mobile-menu {
    display: none; /* El menú móvil no se necesita en pantallas grandes */
  }
}

</style>
