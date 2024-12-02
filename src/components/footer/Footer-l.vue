<template>
  <div class="container">
    <div class="hight-text">
      <div class="text-ber">
        <p style="line-height: 1;">fabricado por <br><span style="font-size: 40px;">BERTOT</span> </p>
        </div>
    </div>
    <div class="direction">
      <svg class="svg-d" xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 384 512" fill="#10395F"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> 
      <p>Callao 4528 "E" <br>
        2000    Rosario</p>
    </div>
    <div class="direction">
      <svg style="margin-top: 2vw;margin-right: 1vw;" xmlns="http://www.w3.org/2000/svg" height="34" width="34" viewBox="0 0 512 512" fill="#10395F"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
      <p>+54 341 4637573 <br>
        +54 341 4667834</p>
    </div>
  </div>
  <footer>
      <p> <span style="font-weight: lighter;">Copyright© 2024</span> Bertot Metalmecánica S.R.L.</p>
    </footer>
  </template>
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>

.container {
  display: flex;
  justify-content: space-around;
  width: 1440px;
}

footer {
  width: 1440px;
  font-size: 21px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #FFFFFF;
  text-align: center;
  height: 30px;
  background-color: #10395F;
}

.svg-d {
        display: flex;
        margin-top: 1.8vw;
        padding-right: 1vw;
    }

.direction {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 100;
  color: #10395F;
  font-size: 25px;
  display: flex ;
}

  .high-text {
    justify-content: start;
    text-align: left;
    color: #10395F;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-top: 2vw;
    
  }

  .text-ber {
    justify-content: start;
    text-align: left;
    color: #10395F;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    margin-top: 2vw;
  }
  
  @media (max-width: 480px) {
    .container {
      width: 100%;
      display: grid;
      justify-content: center;
    }
    .text-ber {
      margin-left: 8vw;
    }
    p span {
      font-size: 20px;
    }
    .direction {
      display: flex;
      align-items: center;
    }
    footer {
      width: 100%;
      height: 62px;
      display: grid;
      font-size: 16px;
      text-align: center;
    }
  }
  
  </style>