<template>
  <div
    id="tech"
    class="vh-100- d-flex- align-items-center justify-content-center bg-light py-5"
  >
    <div class="container">
      <div class="my-5 py-5 wow animate__animated animate__fadeInDown">
        <h2 class="display-5 fw-bold lh-1 mb-4">Tecnologías</h2>
      </div>
      <div class="row justify-content-center">
        <div
          v-for="technology in technologies"
          :key="technology.id"
          class="col-6 col-md-4 col-lg-2 mb-5 wow animate__animated animate__slideInDown"
        >
          <div class="card h-100 border-0">
            <div class="card-body">
              <p
                class="card-text display-5 text-center"
                v-html="technology.icon"
              ></p>
              <p class="card-text text-center">{{ technology.name }}</p>
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
  name: "TechnologyView",

  data() {
    return {
      technologies: [],
      host: "http://rozos-media.me/storage/",
    };
  },
  created() {
    this.fetchTechnology();
  },
  methods: {
    async fetchTechnology() {
      try {
        const response = await apiClient.get("/technologies");
        this.technologies = response.data;
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    },
  },
};
</script>
