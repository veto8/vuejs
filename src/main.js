import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import worker_service from "./services/Worker_service.js";
const worker = new Worker(new URL("./services/db_worker.js", import.meta.url), {
  type: "module",
});

const app = createApp(App);
worker_service.set_default_message(worker);
app.provide("Worker", worker);
app.provide("Worker_service", worker_service);

app.use(router);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "system",
      cssLayer: false,
    },
  },
});

app.mount("#app");
