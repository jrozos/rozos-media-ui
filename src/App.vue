<template>
  <div id="app">
    <HomeView />
  </div>
</template>

<script>
import HomeView from "./views/HomeView.vue"; // Ensure the casing and file extension are correct

export default {
  name: "App",
  components: {
    HomeView, // Register the component with the correct casing
  },
};
</script>
