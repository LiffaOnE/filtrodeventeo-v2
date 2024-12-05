<template>
    <div class="carousel-images">
        <div class="embla" ref="emblaRef">
            <div class="embla__container">
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img01.png" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img02.png" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img03.png" alt=""></div>
            </div>
        </div>
        <div class="background-card-two">
            <span style="text-align: center; align-content: center;"> Prolonga la vida útil<br/>de los lubricantes. </span>
        </div>
        <Carouse-Two/>
    </div>
</template>

<script lang="ts" setup>

import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
import CarouseTwo from './Carouse-two.vue';


const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()])

</script>

<style scoped>

.carousel-images {
    /* background-color: black; */
    display: flex;
    gap: 21px;
    overflow: hidden; /* Oculta las slides fuera del viewport */
}

.background-card {
    justify-content: center;
    text-align: center;
    width: 466px;
    height: 466px;
    background-color: #D9D9D9;
}

.background-card-two {
    width: 466px;
    height: 466px;
    background-color: #10395F;
    align-content: center;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: #FFFFFF;
}

.embla {
    overflow: hidden;
}

.embla__container {    
    display: flex;  
    width: 466px;
}

.embla__slide {    
    flex: 0 0 100%;    
    min-width: 0;  
}

@media (max-width: 480px) {
    .carousel-images {
        display: block; /* Cambia el contenedor del carrusel a bloque para apilar las imágenes */
        width: 100%; /* Asegura que el carrusel ocupe todo el ancho disponible */
    }

    .background-card-two {
        display: block;
        width: 260px;
        height: 260px;
        justify-content: center;
        margin-left: 15vw;
    }

    .embla {
    overflow: hidden;
    width: 100%;
    }

    .embla__container {
        display: flex;
        margin-top: 4vw;
    }

    .embla__slide {
        width: 10px; /* Asegura que cada slide ocupe el 100% del contenedor */
        height: 260px; /* Permite que la altura se ajuste automáticamente */
    }

    .background-card {
        width: 260px;
        height: 260px;
        margin-left: 15vw;
    }
}


</style>