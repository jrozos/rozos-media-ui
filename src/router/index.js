import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ServiceView from "../views/ServiceView.vue";
import ProjectView from "../views/ProjectView.vue";
import TechnologyView from "../views/TechnologyView.vue";
import ContactView from "../views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/services",
    name: "services",
    component: ServiceView,
  },
  // {
  //   path: "/project",
  //   name: "project",
  //   component: ProjectView,
  // },
  // {
  //   path: "/technology",
  //   name: "technology",
  //   component: TechnologyView,
  // },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
