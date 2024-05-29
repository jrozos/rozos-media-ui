<template>
  <div id="service" class="container-fluid text-center bg-light py-5">
    <div class="mb-4">
      <h2 class="display-5 fw-bold py-5">Servicios</h2>
    </div>
    <div class="container">
      <div v-for="service in services" class="row align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <div v-for="asset in service.assets" :key="asset.id">
            <img
              :src="host + '/storage/' + asset.image"
              :alt="asset.name"
              class="d-block mx-lg-auto img-fluid rounded shadow"
              loading="lazy"
            />
          </div>
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">{{ service.name }}</h1>
          <p class="lead">
            {{ service.description }}
          </p>
          <!-- <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-dark btn-lg px-4 me-md-2">
              Contacto
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiClient from "@/axios.js";
export default {
  name: "ServiceView",

  data() {
    return {
      services: [],
      host: this.$host,
    };
  },
  created() {
    this.fetchServices();
  },
  methods: {
    async fetchServices() {
      try {
        const response = await apiClient.get("/services");
        this.services = response.data;
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    },
  },
};
</script>
