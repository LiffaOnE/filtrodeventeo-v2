<template>
    <div class="carousel-images">
        <div class="embla" ref="emblaRef1">
            <div class="embla__container">
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img01.png" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img02.png" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/img03.png" alt=""></div>
            </div>
        </div>

        <div class="embla" ref="emblaRef2">
            <div class="embla__container">
                <div class="embla__slide">
                    <div class="background-card-two">
                    <span style="text-align: center; align-content: center;"> Prolonga la vida útil<br/>de los lubricantes. </span>
                    </div>
                </div>
                <div class="embla__slide">
                    <div class="background-card-two">
                    <span style="text-align: center; align-content: center;"> Disminuye el desgaste y <br/>costos de mantención. </span>
                    </div>
                </div>
                <div class="embla__slide">
                    <div class="background-card-two">
                    <span style="text-align: center; align-content: center;"> Eliminación de contaminación por agua <br/>en lubricantes y otros fluidos. </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="embla" ref="emblaRef3">
            <div class="embla__container">
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide01.svg" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide02.svg" alt=""></div>
                <div class="embla__slide"><img class="background-card" src="../../assets/carousel/iso_slide03.svg" alt=""></div>
            </div>
        </div>
        <!-- <Carouse-Two/> -->
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
// import CarouseTwo from "./Carouse-two.vue";

const emblaRef1 = ref(null);
const emblaRef2 = ref(null);
const emblaRef3 = ref(null);  // Nueva referencia para el tercer carrusel
let embla1, embla2, embla3;    // Nueva instancia para el tercer carrusel

onMounted(() => {
  // Verificar si la referencia de emblaRef1 existe y luego inicializar embla1
  if (emblaRef1.value) {
    embla1 = EmblaCarousel(emblaRef1.value, { loop: true }, [
      Autoplay({ delay: 8000, stopOnInteraction: false }),
    ]);
    embla1.on("select", () => setSlideVisibility(embla1));
    setSlideVisibility(embla1); // Establecer el estado inicial
  }

  // Verificar si la referencia de emblaRef2 existe y luego inicializar embla2
  if (emblaRef2.value) {
    embla2 = EmblaCarousel(emblaRef2.value, { loop: true }, [
      Autoplay({ delay: 8000, stopOnInteraction: false }),
    ]);
    embla2.on("select", () => setSlideVisibility(embla2));
    setSlideVisibility(embla2); // Establecer el estado inicial
  }
  if (emblaRef3.value) {
    embla3 = EmblaCarousel(emblaRef3.value, { loop: true }, [
      Autoplay({ delay: 5000, stopOnInteraction: false }),
    ]);
    embla3.on("select", () => setSlideVisibility(embla3));
    setSlideVisibility(embla3);
  }
});


function setSlideVisibility(emblaInstance) {
  const slides = emblaInstance.slideNodes();
  const selectedIndex = emblaInstance.selectedScrollSnap();

  slides.forEach((slide, index) => {
    if (index === selectedIndex) {
      slide.classList.add("is-visible");
    } else {
      slide.classList.remove("is-visible");
    }
  });
}


</script>



<style scoped>


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

.carousel-images {
  display: flex;
  gap: 21px;
  overflow: hidden; /* Oculta las slides fuera del viewport */
}

.background-card {
  justify-content: center;
  text-align: center;
  width: 466px;
  height: 466px;
  background-color: #d9d9d9;
}

.embla {
  overflow: hidden;
}

.embla__container {
  display: flex;
  width: 100%;
  height: 466px;
}

.embla__slide {
  width: 100%; /* Ajustar al contenedor */
  height: 100%; /* Ajustar al contenedor */
  opacity: 0; /* Ocultar slides por defecto */
  transition: opacity 3s ease; /* Suavizar la transición */
  pointer-events: none; /* Evitar clics en slides ocultos */
}

.embla__slide.is-visible {
  opacity: 1; /* Mostrar el slide activo */
  pointer-events: auto; /* Permitir interacción */
}

@media (max-width:1920px) {
  .carousel-images {
    width: 100%;
    /* gap: 14%; */
    overflow: hidden;
    display: flex;
  }

.embla {
  width: 720px;
  height: 500px;
}

.embla__container {
  display: flex;
  width: 100%;
  height: 500px;
}
.embla__slide.is-visible  {
    width: 720px;
    height: 500px;
}
/* .background-card{
  width: 720px;
  height: 500px;
}
.background-card-two {
  width: 720px;
  height: 500px;
} */

}

@media (max-width: 480px) {
    .carousel-images {
        display: block; /* Cambia el contenedor del carrusel a bloque para apilar las imágenes */
        width: 90%; /* Asegura que el carrusel ocupe todo el ancho disponible */
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
    height: auto;
    width: auto;
    }

    .embla__container {
        display: flex;
        margin-top: 4vw;
        height: auto;
        width: auto;
    }

    .embla__slide {
      height: 260px;
      width: auto;
    }

    .embla__slide.is-visible {
      height: 260px;
      width: auto;
    }

    .background-card {
        width: 260px;
        height: 260px;
        margin-left: 15vw;
    }
}


</style>