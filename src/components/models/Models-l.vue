<template>
    <div class="navbar-top">
        <img class="nav-img" src="../../assets/iso_blanco.svg" alt="">
        <h1 class="nav-text">MODELOS</h1>
    </div>
    <div class="model-block">
        <div class="model-flex">
        <div class="box">
          <p class="text-in-line">BRT-42-27-37</p>
        </div>
        <div class="box-transparent">
          <img class="img-ber" src="./../../assets/brt42-27-37_foto.jpg" alt="">
        </div>
        <div class="box-white">
          <img class="img-ber" src="./../../assets/esqmod1.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="model-flex">
      <div class="box">
        <p class="text-in-line">BRT-SIL.300</p>
      </div>
      <div class="box-transparent">
        <img class="img-ber" src="./../../assets/brt-sil300_foto.jpg" alt="">
      </div>
      <div class="box-white">
        <img class="img-ber" src="./../../assets/esqmod2.jpg" alt="">
      </div>
    </div>
    <div class="video-view">
      <video class="video-view" autoplay controls src="../../assets/video-filtro-de-venteo.mp4" type="video/mp4"></video>
    </div>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>
  
  .navbar-top {
    width: 1440px;
    height: 193px;
    background-color: #CC9900;
    display: flex;
    margin-top: 11vw;
  }

  .box-transparent {
    width: 367px;
    height: 397px;
    border: 3px #10395F solid;
    display: flex;                
    justify-content: center;      
    align-items: center;          
}

.img-ber {
    max-width: 50%;            
    height: auto;              
    margin: 10px;             
}

  .nav-img {
    width: 65px;
    height: 65px;
    align-self: center;
    padding-left: 5vw;
  }

  .text-in-line {
    display: flex;
    font-size: 24px;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #FFFFFF;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

  .model-flex {
    width: 1440px;
    display: flex;
    justify-content: center;
    gap: 1vw;
    margin-top: 1vw;
    margin-left: -2vw;
  }

  .box {
    background-color: #10395F;
    width: 373px;
    height: 402px;
    align-content: center;
  }

  /* .box-transparent {
    width: 367px;
    height: 397px;
    border:3px #10395F solid;
  } */

  .box-white {
    width: 367px;
    height: 397px;
    border:3px #D9D9D9 solid;
    display: flex;                
    justify-content: center;      
    align-items: center;    
  }

  .video-view {
    margin-top: 2%;
    width: auto;
    height: 56.24vw;
  }

  @media (max-width: 480px) {
    .navbar-top {
      width: 100%;
      margin-top: 44vw;
    }
    .model-flex {
      display: block;
      width: 100%;
      margin-left: 0;
    }
    .box {
      width: 100%;
      height: 90px;
      margin-top: 4vw;
    }

    .box-transparent, .box-white {
      width: 365px;
      height: 365px;
      margin-top: 2vw;
      margin-left: 0.5vw;
    }
    .video-view {
      width: 100%;
      height: auto;
    }
  }

  </style>
  