<template>
    <div class="carousel-images">
        <div class="embla" ref="emblaRef">
            <div class="embla__container">
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide01.svg" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide02.svg" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide03.svg" alt=""></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>

import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'


const [emblaRef] = emblaCarouselVue({ loop: true }, [Autoplay()])

</script>

<style scoped>

.carousel-images {
    display: flex;
    gap: 21px;
    justify-content: center; /* Centra el carrusel en pantallas grandes */
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

/* Media Query para pantallas de 480px o menos */
@media (max-width: 480px) {
    .carousel-images {
        display: block; /* Cambia el contenedor del carrusel a bloque para apilar las imágenes */
        width: 100%; /* Asegura que el carrusel ocupe todo el ancho disponible */
    }

    .embla__container {
        display: flex;
    }

    .embla__slide {
        width: 100%; /* Asegura que cada slide ocupe el 100% del contenedor */
        height: auto; /* Permite que la altura se ajuste automáticamente */
    }

    .background-card {
        width: 260px;
        height: 260px;
        margin-left: 15vw;
    }
}

</style>