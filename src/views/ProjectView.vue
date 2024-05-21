<template>
  <div class="row justify-content-center my-5">
    <div class="col-10 col-sm-8 col-lg-10 text-center">
      <h2 class="display-5 fw-bold lh-1 mb-3">Proyectos</h2>
    </div>
    <div class="col-10 col-sm-8 col-lg-10 text-center mt-5">
      <p class="lead">Proyectos realizados para mis clientes</p>
    </div>
  </div>
  <div class="row my-5 py-5">
    <div v-for="project in projects" :key="project.id" class="col">
      <div class="card h-100 border-0">
        <div v-for="asset in project.assets" :key="asset.id">
          <img :src="host + asset.image" class="card-img" :alt="asset.name" />
        </div>
        <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">
            {{ project.description }}
          </p>
          <a class="btn btn-outline-dark" :href="project.url" target="_blank"
            >Visitar</a
          >
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
      host: "http://rozos-media.me/storage/",
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
