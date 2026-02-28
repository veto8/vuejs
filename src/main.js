import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import worker from "./services/Sqlite3.js";

console.log("xxxxxxxxxxxx");
console.log(worker);
console.log("xxxxxxxxxx");
const app = createApp(App);

app.provide("Test", {
  message: "Hello",
  sum(a, b) {
    return a + b;
  },
});

app.provide("Worker", worker);

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
