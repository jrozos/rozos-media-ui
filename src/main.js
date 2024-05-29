import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Define constant variables
const ASSET_HOST = "https://app.rozosmedia.com/storage/";
const IMG_HOST = "https://app.rozosmedia.com/img/";

const app = createApp(App);

// Attach constants to app instance
app.config.globalProperties.$assetHost = ASSET_HOST;
app.config.globalProperties.$imgHost = IMG_HOST;

createApp(App).use(store).use(router).mount("#app");

import "bootstrap/dist/js/bootstrap";
