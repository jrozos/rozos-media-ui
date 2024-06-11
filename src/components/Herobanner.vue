<template>
  <div class="vh-100 d-flex align-items-center justify-content-center">
    <div class="row align-items-center justify-content-center">
      <div
        class="col-lg-6 mb-4 text-light wow animate__animated animate__fadeInLeft"
      >
        <h1 class="display-4 fw-bold lh-1 mb-3">Rozos Media</h1>
        <p class="lead">Hola, soy Pepe Rozos</p>
        <p class="lead">
          <strong
            >Desarrollador web y QA con más de 9 años de experiencia.</strong
          ><br />
          Especializado en Laravel, Bootstrap, VUE y Adobe AEM.
        </p>
        <p class="lead">
          <strong>¿Tienes un proyecto o una oferta laboral interesante?</strong
          ><br />¡Contáctame y hablemos!
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <a class="btn btn-light btn-lg px-4 me-md-2" href="#contact"
            >Contactame</a
          >
        </div>
      </div>
      <div class="col-10 col-sm-8 col-lg-6 mb-5">
        <img
          :src="host + '/img/hero-image.png'"
          class="d-block mx-lg-auto img-fluid rounded shadow wow animate__animated animate__fadeIn"
          alt="Rozos Media"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Herobanner",
  data() {
    return {
      host: this.$host,
    };
  },
};
</script>
