<template>
  <!-- <div class="space"></div> -->
    <div id="operator" class="general-background">
      <div class="text-image-container">
      <div class="high-text">
        <img class="img-azul" src="../../assets/iso_azul.svg" alt="">
        <h1>{{$t("Operation")}}</h1>
      </div>
      <div class="text-center">
          <p>
            {{ $t("Operation-1") }}<br>
            {{ $t("Operation-2") }}<br>
            {{ $t("Operation-3") }}<br>
            {{ $t("Operation-4") }}<br>
            {{ $t("Operation-5") }}<br>
            {{ $t("Operation-6") }}
          </p>
          <p>
            {{ $t("Reductor-1") }}<br>
            {{ $t("Reductor-2") }}<br>
            {{ $t("Reductor-3") }}<br>
            {{ $t("Reductor-4") }}
          </p>
      </div>
      <div class="text-under">
          <p>
            {{$t("The")}}<span>{{$t("Filter")}} </span> {{$t("Under-1")}} <br>
            {{$t("Under-2")}}<br>
            {{$t("Under-3")}}<br>
            {{$t("Under-4")}}<br>
            {{$t("Under-5")}}<br>
            {{$t("Under-6")}}
          </p>
      </div>
    </div>
      <div class="image-background-right">
        <img class="img-a" src="../../assets/corte-de-filtro.png" alt="">
      </div>
    </div>
    <AplicationsL/>
  </template>
  
  <script lang="ts" setup>

    import AplicationsL from './Aplications-l.vue';

  </script>
  
  <style scoped>
  
  .general-background {
    width: 1440px;
    display: flex;
    justify-content: space-around;
    margin-top: 4vw;
  }

  .image-background-right {
    width: 476px;
    height: 926px;
    background-color: #F0EDED;
    display: flex;    
    justify-content: center;
  }

  .img-a {
    justify-content: center;
    align-self: center;
    display: flex;
    width:351px;
    height:492px;
  }

  .high-text {
    justify-content: start;
    text-align: left;
    color: #10395F;
    font-weight: bold;
    
  }

  .img-azul {
    width: 80px;
    height: 80px;
    margin-bottom: -40px;
    margin-left: -14px;
  }

  .text-center {
    font-weight: 300;
    color: #10395F;
    font-size: 20px;
    margin-top: 8vw;
  }

  .text-image-container {
    display: block;
  }

  .text-under {
    font-weight: 400;
    color: #10395F;
    font-size: 20px;
    margin-top: 4vw;
  }

  .text-under span {
    font-weight: 600;
  }

  .space {
    width: 1440px;
    background-color: #FFFFFF;
    height: 103px;
  }



@media (max-width:1920px) {
  .general-background {
    width: 100%;
  }
  
}

  /* Media Query para pantallas de 480px o menos */
  @media (max-width: 480px) {
  .general-background {
    width: 100%; /* Asegura que todo el contenido ocupe el ancho disponible */
    display: flex; 
    flex-direction: column; /* Coloca los elementos en una columna */
    align-items: center; /* Centra los elementos */
  }

  br {
    display: none;
  }

  .image-background-right {
    width: 100%; /* La imagen ocupará todo el ancho disponible */
    height: auto; /* Ajusta la altura automáticamente */
    margin-top: 20px; /* Espaciado entre texto e imagen */
  }

  .high-text {
    display: flex;
    text-align: center; /* Centra el título */
    margin-bottom: 10px; /* Espaciado pequeño debajo del título */
    justify-content: center;
    margin-top: 5vw;
  }

  .text-center, .text-under {
    font-size: 16px; /* Tamaño de texto más pequeño para pantallas pequeñas */
    line-height: 1.5; /* Ajusta el interlineado para mantener legibilidad */
    text-align: justify; /* Justifica el texto para mantenerlo visualmente junto */
    margin: 0; /* Elimina márgenes entre los párrafos */
    padding: 0; /* Elimina cualquier padding innecesario */
    width: 100%; /* Asegura que el texto no llegue al borde de la pantalla */
  }

  .text-image-container {
    margin: 3vw;
  }

  .text-under span {
    font-weight: bold; /* Asegura que el texto resaltado sea legible */
  }

  .img-a {
    width: 100%; /* Ajusta la imagen al ancho de la pantalla */
    height: auto; /* Mantén proporción de la imagen */
  }
}

  </style>
  