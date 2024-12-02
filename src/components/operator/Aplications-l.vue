<template>
    <div class="navbar-top">
        <img class="nav-img" src="../../assets/iso_blanco.svg" alt="">
        <h1 class="nav-text">APLICACIONES</h1>
    </div>

    <div class="general-container">

    
    <div class="box-container">
      <div class="box-one">
        <img class="box-one" src="../../assets/ind/aceite.jpg" alt="">
      </div>
      <div class="box-a">
          <p class="text-box">Aceitera</p>
      </div>
    </div>

    <div class="box-container">
      <div class="box-one">
        <img class="box-one" src="../../assets/ind/cemento.jpg" alt="">
      </div>
      <div class="box-a" style="background-color: #898987;">
          <p class="text-box">Cemento</p>
      </div>
    </div>
  </div>

  <div class="general-container">

    
<div class="box-container">
  <div class="box-a" style="background-color: #7C91B1;">
      <p class="text-box">Siderurgia</p>
  </div>
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/siderurgia.jpg" alt="">
  </div>
</div>

<div class="box-container">
  <div class="box-a" style="background-color: #F6BC0A;">
      <p class="text-box">Harina</p>
  </div>
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/harina.jpg" alt="">
  </div>
</div>
</div>

<div class="general-container">

    
<div class="box-container">
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/mineria.jpg" alt="">
  </div>
  <div class="box-a" style="background-color: #BC771E;">
      <p class="text-box">Minería</p>
  </div>
</div>

<div class="box-container">
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/madera.jpg" alt="">
  </div>
  <div class="box-a" style="background-color: #5E4709;">
      <p class="text-box">Madera</p>
  </div>
</div>
</div>

<div class="general-container">

    
<div class="box-container">
  <div class="box-a" style="background-color: #3399FF;">
      <p class="text-box">Puertos</p>
  </div>
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/puertos.jpg" alt="">
  </div>
</div>

<div class="box-container">
  <div class="box-a" style="background-color: #669933;">
      <p class="text-box">Materia a granel</p>
  </div>
  <div class="box-one">
    <img class="box-one" src="../../assets/ind/granel.jpg" alt="">
  </div>
</div>
</div>
<div class="space"></div>

  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>
  
  .navbar-top {
    width: 1440px;
    height: 193px;
    background-color: #10395F;
    display: flex;
  }

  .nav-img {
    width: 65px;
    height: 65px;
    align-self: center;
    padding-left: 5vw;
  }

  .nav-text {
    justify-content: start;
    text-align: center;
    align-items: center;
    color: #FFFFFF;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    display: flex;
    padding-top: 5px;
  }

  .box-one {
    width: 209px;
    height: 209px;
    background-color: beige;
    display: flex;
  }

  .box-a {
    width: 395px;
    background-color: #B29C0A;
    height: 209px;
    display: flex;
    justify-content: center;
  }


  .box-container {
    width: 604px;
    display: flex;
  }

  .text-box {
    font-size: 24px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #FFFFFF;
    font-weight: bold;
    align-self: center;

  }

  .general-container {
    width: 1440px;
    height: 209px;
    display: flex;
    justify-content: center;
  }

  .space{
  width: 1440px;
  background-color: #FFFFFF;
  height: 103px;
  }

  /* Media Query para pantallas de 480px o menos */
@media (max-width: 480px) {
  .navbar-top {
    width: 100%;
  }
  .general-container {
    width: 100%;
    height: auto;
    display: block;
  }
  
  .box-container {
    width: 100%;
    display: flex;
  }
  .box-one {
    width: 145px;
  }
}

  </style>
  