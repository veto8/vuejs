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

worker.onmessage = (e) => {
  const action = e.data[0];
  const args = e.data[1];
  switch (action) {
    case "log_message":
      console.log("xxxxxxxxxxxxx");
      console.log({ args });
      console.log("xxxxxxxxxxxxx");
      //log.info(argumentos);
      break;
    case "iniciado":
      [$nombre, $fechaNacimiento, $insertar, $obtener].forEach(
        (elemento) => (elemento.disabled = false),
      );
      break;
    case "persona_insertada":
      console.log({ argumentos });
      //log.info("...persona insertada");
      break;

    case "log_message":
      console.log({ argumentos });
      //log.info(argumentos);
      break;

    case "personas_obtenidas":
      const personas = argumentos;
      $contenedorPersonas.innerHTML = "";
      for (const persona of personas) {
        //  $contenedorPersonas.innerHTML += `<strong>${persona.nombre}</strong> ${persona.fechaNacimiento}<br>`;
      }
      break;
  }
};

const app = createApp(App);

/* Example
app.provide("Test", {
  message: "Hello",
  sum(a, b) {
    return a + b;
  },
});
*/
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
