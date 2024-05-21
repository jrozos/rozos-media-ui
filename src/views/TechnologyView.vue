<template>
  <div class="vh-100 d-flex align-items-center justify-content-center">
    <div class="w-100 text-center">
      <div class="mb-4">
        <h2 class="display-5 fw-bold py-5">Tecnologías</h2>
      </div>
      <div class="d-flex flex-wrap justify-content-around">
        <div
          v-for="technology in technologies"
          :key="technology.id"
          class="col-12 col-md-4 col-lg-2 mb-4"
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
