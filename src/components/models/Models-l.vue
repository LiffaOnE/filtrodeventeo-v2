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
          <img id="myImg" class="img-ber" src="./../../assets/brt42-27-37_foto.jpg" alt="" >
          <div class="middle"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10395F" width="40px" height="46px"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
        </div>
        <div class="box-white">
          <img id="myImg" class="img-ber" src="./../../assets/esqmod1.jpg" alt="">
          <div class="middle"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10395F" width="40px" height="46px"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
        </div>
      </div>
    </div>
    <div class="model-flex">
      <div class="box">
        <p class="text-in-line">BRT-SIL.300</p>
      </div>
      <div class="box-transparent">
        <img id="myImg" class="img-ber" src="./../../assets/brt-sil300_foto.jpg" alt="">
        <div class="middle"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10395F" width="40px" height="46px"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
      </div>
      <div class="box-white">
        <img id="myImg" class="img-ber" src="./../../assets/esqmod2.jpg" alt="">
        <div class="middle"> 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#10395F" width="40px" height="46px"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
          </div>
      </div>
    </div>
    <div class="video-view">
      <video class="video-view" autoplay controls src="../../assets/video-filtro-de-venteo.mp4" type="video/mp4"></video>
    </div>
    <div id="myModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="img01">
      <div id="caption"></div>
    </div>
    
  </template>
  
  <script>
  document.addEventListener("DOMContentLoaded", function() {
    // Obtener el modal
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
  
    // Obtener todas las imágenes dentro del contenedor
    var images = document.querySelectorAll(".model-flex img");
  
    // Añadir un evento de clic a cada imagen
    images.forEach(function(img) {
      img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.src; // Se asigna la imagen que fue clickeada al modal
        captionText.innerHTML = this.alt; // Se asigna el texto de la imagen (alt) como título del modal
      });
    });
  
    // Cerrar el modal cuando se hace clic en la "x"
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    };
  });
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
  }

  .nav-text {
    justify-content: start;
    text-align: center;
    align-items: center;
    color: #FFFFFF;
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
  

  .middle {
  opacity: -1;
  position: absolute;
  transform: translate(-0%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  background-color: transparent;
  overflow: hidden;
  pointer-events: none; /* Desactiva los eventos de puntero para la lupa */
  transition: opacity 0.3s ease-in-out;
}

.box-white:hover .middle{
  opacity: 1;
  transition: 0.3ms;
}

.box-transparent:hover .middle {
  opacity: 1;
  transition: 0.3ms;
}

.svg-d {
  display: flex;
  justify-content: center;
  align-items: center;
}

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

  #myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover { opacity: 0.7; }


/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 30%;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 30%;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
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
      margin-left: 2.5vw;
    }
    .video-view {
      width: 100%;
      height: auto;
    }
    .modal-content {
    max-width: 70%;
  }
  }

  </style>
  