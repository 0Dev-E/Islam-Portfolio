import "./assets/styles.css";
import "./assets/main2.css";

import "./assets/main.js";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
