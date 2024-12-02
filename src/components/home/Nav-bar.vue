<template>
    <div class="backgroundNav">
        <img class="image-logo" src="../../assets/logofiltro.png" alt="">
        <img class="large-header" src="../../assets/fdo_header.jpg" alt="">
        <div class="languages-l">
            <img class="languages" src="../../assets/castellano.jpg" alt="">
            <img class="languages" src="../../assets/ingles.jpg" alt="">
            <img class="languages" src="../../assets/portugues.jpg" alt="">
        </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.image-logo {
    width: 18%;
    height: 90px;
    align-self: center;
    margin-left: 10%;
}

.large-header {
    display: flex;
    width: 50%;
    height: 100%;
}

.backgroundNav {
    display: flex;
    width: 1440px;
    background-color: #10395F;
    height: 5vw;
}

.languages {
    display: flex;
    margin: 10px;
}

.languages-l {
    display: block;
    align-self: center;
    margin: 30px;
}

/* Para móviles pequeños (smartphones en modo vertical) */
@media (max-width: 480px) {
  .backgroundNav {
    width: 100%;
    background-color: #0F395F;
    display: flex;
    justify-content: center; /* Centra los elementos dentro de la navbar */
    align-items: center; /* Centra el logo verticalmente */
    height: auto; /* Ajusta la altura automáticamente */
  }

  /* Mostrar solo el logo y ocultar los demás elementos */
  .image-logo {
    background-color: #0F395F;
    width: 230px;
    display: block; /* Asegúrate de que el logo se muestre correctamente */
    margin-left: -30vw; /* Ajuste de margen si es necesario */
    margin-right: 0;
  }

  .large-header, 
  .languages-l {
    display: none; /* Ocultar los otros elementos */
  }
}

/* Para móviles grandes o tablets en modo vertical */
@media (max-width: 768px) {
  body {
    font-size: 15px;
    background-color: lightgreen;
  }
}

/* Para tablets en modo horizontal o pantallas más grandes */
@media (max-width: 1024px) {
  body {
    font-size: 16px;
    background-color: lightyellow;
  }
}

/* Para pantallas de escritorio estándar */
@media (min-width: 1281px) {
  body {
    font-size: 18px;
    background-color: lightseagreen;
  }
}

/* Para pantallas grandes de escritorio (monitores UHD) */
@media (min-width: 1920px) {
  body {
    font-size: 20px;
    background-color: lightgoldenrodyellow;
  }
}

</style>
