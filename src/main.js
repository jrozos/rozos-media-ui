import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css";

// Define constant variables
const HOST = "https://app.rozosmedia.com";
// const HOST = "http://rozos-media.me";

const app = createApp(App);

// Attach constants to app instance
app.config.globalProperties.$host = HOST;

app.use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap";
// import "wow.js/dist/wow.min.js";
import WOW from "wow.js/dist/wow.min.js";

const wow = new WOW();
wow.init();
