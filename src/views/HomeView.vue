<template>
  <div id="app" class="bg-dark">
    <Navbar />
    <div
      :style="{
        backgroundImage: 'url(' + imageUrl + ')',
        backgroundSize: 'cover',
      }"
    >
      <div class="container">
        <Herobanner />
      </div>
    </div>
    <ServiceView />
    <ProjectView />
    <TechnologyView />
    <ContactView />
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Herobanner from "../components/Herobanner.vue";
import ServiceView from "../views/ServiceView.vue";
import ProjectView from "../views/ProjectView.vue";
import TechnologyView from "../views/TechnologyView.vue";
import ContactView from "../views/ContactView.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    Navbar,
    Herobanner,
    ServiceView,
    ProjectView,
    TechnologyView,
    ContactView,
    Footer,
  },
  data() {
    return {
      host: this.$host,
      imageUrl: "",
    };
  },
  mounted() {
    this.imageUrl = this.host + "/img/herobanner.png";
  },
};
</script>
<style>
body {
  background-color: #f6f6f9 !important;
}
.shadow {
  --bs-box-shadow: 30px 30px 0px 0px rgb(119, 25, 166);
  /* --bs-box-shadow: 30px 30px 0px 0px rgba(67, 8, 95); */
}
</style>
