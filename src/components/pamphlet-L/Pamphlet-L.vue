<template>
  <div class="pamphlet-L">
    <p>{{$t("Pamphlet")}}</p>
    <a href="/pdf/folleto-filtro-venteo.pdf" download="folleto-filtro-venteo.pdf">
    <svg xmlns="http://www.w3.org/2000/svg" style="margin-left: 0.25em; fill: #FFFFFF;" height="1em" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM216 232l0 102.1 31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31L168 232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
  </a>
  </div>
</template>

<script>
  export default {
  name: "DownloadPDF",
};
</script>

<style scoped>

.pamphlet-L {
  width: 1440px;
  height: 188px;
  background-color: #10395F;
  color: #FFFFFF;
  font-size: 30px;
  font-weight: bold;
  margin-top: 2vw;
  justify-content: center;
  text-align: center;
  display: flex;
  align-items: center;
}

@media (max-width: 480px) {
  .pamphlet-L {
    margin-top: -2vw;
    width: 100%;
    height: 100px;
    font-size: 23px;
  }
}

@media (max-width:1920px) {
  .pamphlet-L {
    width: 100%;
    margin-top: 0;
  }
}

</style>
