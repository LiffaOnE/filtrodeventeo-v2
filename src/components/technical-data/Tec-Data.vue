<template>
    <div class="container">
        <div class="top">
            <div class="high-text">
        <img class="img-azul" src="../../assets/iso_azul.svg" alt="">
        <h1 id="technical-data">DATOS TÉCNICOS</h1>
    </div> 
        <div class="subtitle-blue">
        <p class="part">PARTES</p>
    </div>
    <div class="box-container" style="background-color: #E9EBEE; text-align: left;  ">
        <p class="text-p" style="margin-right: 2vw;">Carcasa metálica con sello o-ring. <br> 
        Recubierta con pintura en polvo <br>
        poliéster de alta resistencia.</p>
    </div>
    <div class="box-container" style="background-color: #BDC4CE; ">
        <p class="text-p" style="margin-right: 2vw;">Elemento filtrante de 3 micrones.</p>
    </div>
    <div class="box-container" style="background-color: #7D9FBE; text-align: left; " >
        <p class="text-p">Base portafiltro con sello o-ring.<br>
            Rosca de conexión NPT ¼. Diámetro<br>
            piloto para centrado del elemento<br>
            filtrante. Tratamiento superficial por<br>
            electrozincado que brinda protección<br>
            catódica.</p>
        </div>
    </div>
      <div>
        <img class="img-a" src="../../assets/filtro-inclinado-interior.jpg" alt="">
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>

  .container {
    width: 1440px;
    display: flex;
    justify-content: space-around;
    height: 800px;
    margin-top: 4vw;
  }
  
.top {
  display: block;
  margin-left: 5vw;
}

  .high-text {
    justify-content: start;
    text-align: left;
    color: #10395F;
    font-weight: bold;
    /* margin-left: 5vw; */
  }

  .img-azul {
    width: 80px;
    height: 80px;
    margin-bottom: -40px;
    margin-left: -14px;
  }

  .img-a {
    justify-content: center;
    align-self: center;
    display: flex;
    width:100%;
    height:759px;
    margin-top: 12vw;
  }

  .subtitle-blue {
    width: 376px;
    height: 56px;
    background-color: #10395F;
    font-size: 24px;
    color: #FFFFFF;
    font-weight: bold;
    align-self: center;
    justify-content: center;
  }

  .box-container {
    width: 376px;
    height: 221px;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2vw;
    margin-bottom: 10px;
  }

  .text-p {
    font-size: 20px;
    font-weight: 250;
    color: #10395F;
  }

  .part {
    padding-top: 0.5vw;
    padding-left: 1vw;
  }

  @media (max-width:1920px) {
  .container {
    width: 100%;
  }
  
}

  @media (max-width: 480px) {
  .container {
    width: 100%;
    display: grid;
    margin-top: 6vw;
  }
  .top {
    display: block;
    margin-left: 0;
  }
  .high-text {
    display: flex;
    padding: 6vw;
    margin-left: -8vw;
  }
  .img-a {
    width: 100%;
    margin-top: -225vw;;
    height: 260px;
  }
  .subtitle-blue {
    margin-top: 80vw;
    width: 100%;
  }
  .box-container {
    width: 100%;
    font-size: 14px;
    height: 150px;
  }
  .text-p {
    font-size: 16px;
  }
  .part {
    padding: 2.5vw;
  }
}


  </style>
  