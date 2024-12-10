<template>
    <div>
      <button 
        v-show="isVisible" 
        @click="scrollToTop" 
        class="back-to-top"
      >
        ⬆ Top
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isVisible: false, // Controla si el botón se muestra
      };
    },
    methods: {
      // Método para desplazarse al inicio de la página
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Desplazamiento suave
        });
      },
      // Método para verificar si el botón debe ser visible
      checkScroll() {
        this.isVisible = window.scrollY > 300; // Muestra el botón al desplazarse 300px
      },
    },
    mounted() {
      window.addEventListener("scroll", this.checkScroll);
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.checkScroll);
    },
  };
  </script>
  
  <style scoped>
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 15px;
    background-color: #10395F;
    color: white;
    border: none;
    border-radius: 40%;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    z-index: 1000;
    font-family: 'Roboto Condensed';
    transition: opacity 0.3s;
  }
  .back-to-top:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
  .back-to-top {
    padding: 10px;
    font-size: 16px;
    bottom: 10px; /* Más cerca de la parte inferior en pantallas pequeñas */
    right: 10px;  /* Ajuste para que no esté tan alejado del borde */
  }
}
@media (max-width: 480px) {
  .back-to-top {
    padding: 10px;
    font-size: 16px;
    bottom: 10px; /* Más cerca de la parte inferior en pantallas pequeñas */
    right: 10px;  /* Ajuste para que no esté tan alejado del borde */
  }
}
  </style>
  