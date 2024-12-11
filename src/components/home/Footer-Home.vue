<template>
    <div class="container">
        <img class="logo" src="../../assets/iso_blanco.svg" alt="">
        <span class="space-white"></span>
        <span class="text">
           {{ $t("The") }}<span class="text-p">{{ $t("Filter") }}</span>{{ $t("Text-Filter") }} 
            <br/>
            {{ $t("Text-Filter-under") }}
        </span>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>

.container {
    background-color: #10395F;
    height: 300px;
    width: 1440px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
}

.logo {
    width: 150px;
    height: 131px;
    align-self: center;
    margin-left: 10vw;
    justify-content: center;
}

.space-white {
    width: 2px;
    height: 213px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-self: center;
}

.text {
    color: #FFFFFF;
    justify-content: center;
    align-content: center;
    align-self: center;
    /* width: 44.5vw; */
}

.text-p {
    font-weight: bold;
}

@media (max-width:1920px) {
    .container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: -1.5vw;
    }
    .logo {
        margin-left: 2vw;
    }
}

/* Media Query para pantallas de 480px o menos */
@media (max-width: 480px) {
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;/* Deja que el contenedor se ajuste automáticamente */
    width: 100%;
    height: 440px;
    }
    .logo {
    width: 120px;
    margin-bottom: -50vw;
    margin-left: 0vw;
  }
    .text {
    font-size: 18px;
    text-align: center;
    line-height: 1.4;
    width: 58%; /* Ajusta el texto al ancho del contenedor */
  }

    .space-white {
        display: none;
    }
}



</style>
