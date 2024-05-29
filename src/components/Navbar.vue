<template>
  <nav class="navbar sticky-top navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img
          :src="imgHost + 'logo.png'"
          alt="Logo"
          width="50"
          height="50"
          style="filter: invert()"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#service"
              >Servicios</a
            >
            <!-- <router-link to="/services" class="nav-link active"
              >Servicios</router-link -->
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#project"
              >Proyectos</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#tech"
              >Tecnologías</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#contact"
              >Contactame</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <router-view /> -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      imgHost: this.$imgHost,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
