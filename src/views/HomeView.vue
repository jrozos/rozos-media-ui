<template>
  <div id="app">
    <Navbar />
    <div class="container col-xxl-10 px-4 py-5">
      <Herobanner />
      <ServiceView />
      <ProjectView />
      <TechnologyView />
    </div>
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
};
</script>
