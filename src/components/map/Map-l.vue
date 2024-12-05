<template>
    <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13386.015512061158!2d-60.6723556!3d-32.9904887!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab8af8cb4f43%3A0xc785a33879c3867a!2sBERTOT%20METALMECANICA%20SRL!5e0!3m2!1ses-419!2sar!4v1729149125316!5m2!1ses-419!2sar" width="1440" height="390" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div class="coord">
        <div class="svg-d">
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512" fill="#10395F"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
        </div>
        <p>
            <span>Coordenadas GPS. </span>Latitud: 32º 59" 25' S | Longitud: 60º 40" 20' O
        </p>
    </div>
    </template>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 384 512" fill="#10395F"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg> -->
  
  <script lang="ts" setup>
  
  </script>
  
  <style scoped>
    .map {
        margin-top: 2vw;
    }

    .coord {
        display: flex;
        justify-content: center;
        width: 1440px;
        height: 60px;
        background-color: #C9D2DB;
        margin-top: -1.6vw;
        text-align: center;
        padding-top: 1.3vw;
        color: #10395F;
        font-size: 20px;
    }

    span{
        color: #10395F;
        font-weight: 700;
    }

    p {
        color: #10395F;
        font-weight: 200;
    }

    .svg-d {
        display: flex;
        margin-top: 1.2vw;
        padding-left: 2px;
    }

    @media (max-width: 480px) {
        iframe {
            width: 100%;
        }
        .coord {
            width: 100%;
            height: 74px;
            font-size: 12px;
            display: block;
            background-color: #989797;
        }
        .svg-d {
            justify-content: center;
            fill: #FFFFFF;
        }
        svg {
            fill: #FFFFFF;
        }
        p, span{
            color: #FFFFFF;
        }
    }

  </style>