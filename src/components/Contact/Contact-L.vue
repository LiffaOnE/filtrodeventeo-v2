<template>
    <div id="contacto" class="mobile-container">
        <div class="high-text">
        <img class="img-azul" src="../../assets/iso_azul.svg" alt="">
        <h1>{{ $t("Contact") }}</h1>
        </div>
        <form action="https://formsubmit.co/bertot@bertot.com.ar" method="POST">
          <div class="cubik">
            <input type="text" name="name" :placeholder="$t('Name-a')" class="input-barra">
            <input type="text" name="empresa" :placeholder="$t('Company')" class="input-barra">
          </div>
          <div class="cubik">
            <input type="number" name="teléfono" :placeholder="$t('Phone')" class="input-barra">
          <input type="email" name="email" :placeholder="$t('Email')" class="input-barra">
          </div>
          <div class="cubik-v2">
            <label for="consulta" class="label-c">{{$t("Query")}}</label>
            <input type="text" name="consulta" class="input-barra-v2"> 
          </div>
          

          <input type="hidden" name="_next" value="http://localhost:8080/">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_template" value="table">

          <div class="button-submit">
            <button style="text-decoration: none;" type="submit">{{$t("Send-b")}}></button>
          </div>
          
        </form>
    </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>

  .button-submit {
    display: flex;
    justify-content: end;
    width: 1350px;
  }

  button {
  color: #10395F;
  cursor: pointer;
  font-size: 30px;
  text-decoration: none;
  font-weight: initial;
  letter-spacing: -1px;
  border: 0;
  background-color: transparent;
  }
  

 .input-barra {
    border: none; /* Elimina el borde por defecto */
    border-bottom: 1px solid #000; /* Agrega una barra de 2px debajo */
    padding: 10px;
    font-size: 20px;
    color: #999898;
    opacity: 1;
    font-weight: light;
    outline: none; /* Elimina el borde de enfoque */
    width: 539px;
    font-family: 'Roboto Condensed';
}

.input-barra::placeholder{
  color: #999898;; /* Cambia 'black' al color que prefieras */
  opacity: 0.5; /* Asegura que el texto no sea transparente (opcional) */
}

.input-barra:focus {
    border-bottom-color: #000; /* Cambia el color de la barra cuando el input está enfocado */
}

.input-barra-v2 {
    border: none; /* Elimina el borde por defecto */
    border-bottom: 1px solid #000; /* Agrega una barra de 2px debajo */
    padding: 10px;
    font-size: 20px;
    outline: none; /* Elimina el borde de enfoque */
    width: 95%;
    margin-left: 4.3vw;
    color: #999898;
    font-weight: light;
}

.label-c {
  margin-left: 4.5vw;
  display: block;
  font-size: 20px;
  font-weight: light;
  color: #999898;
  opacity: 0.5;
}

.cubik-v2 {
  display: block;
  width: 100%;
  margin-bottom: 1vw;
  font-size: 24px;
  margin-left: 1vw;
}

form {
  width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
}

.cubik {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1vw;
  font-size: 24px;
}

.high-text {
    justify-content: start;
    text-align: left;
    color: #10395F;
    font-weight: bold;
    margin-top: 2vw;
    width: 90%;
    margin-left: 5vw;
  }

  .img-azul {
    width: 80px;
    height: 80px;
    margin-bottom: -40px;
    margin-left: -14px;
  }

  @media (max-width:1920px) {
    .mobile-container {
      width: 100%;
    }
    .cubik {
      width: 100%;
    }
    .cubik-v2 {
      width: 92%;
      margin-left: 6vw;
    }
    .label-c {
      width: 80%;
    }
    .input-barra-v2 {
      width: 85%;
    }
    .button-submit {
      width: 90%;
    }
  }

  @media (max-width:1440px) {
    .mobile-container {
      width: 100%;
    }
    .cubik {
      width: 100%;
    }
    .cubik-v2 {
      width: 92%;
      margin-left: 1vw;
    }
    .label-c {
      width: 80%;
    }
    .input-barra-v2 {
      width: 96%;
    }
    .button-submit {
      width: 90%;
    }
  }
  @media (max-width: 480px) {
    .mobile-container {
      display: block;
      width: 100%;
      margin-top: 10vw;
    }
    .high-text {
      display: flex;
      width: 300px;
    }
    form, .cubik, .cubik-v2{
      display: block;
        width: 95%;
        margin-left: 1vw;
    }
    .input-barra {
      width: 88vw;
      display: block;
      margin-top: 10vw;
      font-family: 'Roboto Condensed';
    }
    .input-barra-v2 {
      width: 87vw;
      display: block;
      margin-left: 1vw;
      margin-top: 4vw;
    }
    .label-c {
      margin-top: 10vw;
      margin-left: 1vw;
    }
    .button-submit {
      width: 95%;
    }
    button {
      font-size: 24px;
    }
  }
  

</style>