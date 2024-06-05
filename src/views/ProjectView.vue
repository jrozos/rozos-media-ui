<template>
  <div
    id="project"
    class="vh-100- d-flex- align-items-center justify-content-center text-light py-5"
  >
    <div class="container">
      <div class="my-5 py-5 wow animate__animated animate__fadeInDown">
        <h2 class="display-5 fw-bold lh-1 mb-4">Proyectos</h2>
        <p class="lead">Proyectos realizados para mis clientes</p>
      </div>
      <div class="row">
        <div
          v-for="project in projects"
          :key="project.id"
          class="col-12 col-md-6 col-lg-6 mb-5 wow animate__animated animate__fadeIn"
        >
          <div class="card h-100 border-0 bg-dark text-light">
            <div v-for="asset in project.assets" :key="asset.id">
              <img
                :src="host + '/storage/' + asset.image"
                class="card-img"
                :alt="asset.name"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">
                {{ project.description }}
              </p>
            </div>
            <div class="card-body">
              <a
                class="btn btn-outline-light"
                :href="project.url"
                target="_blank"
                >Visitar</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import apiClient from "@/axios.js";
export default {
  name: "ProjectView",

  data() {
    return {
      projects: [],
      host: this.$host,
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    async fetchProjects() {
      try {
        const response = await apiClient.get("/projects");
        this.projects = response.data;
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    },
  },
};
</script>
