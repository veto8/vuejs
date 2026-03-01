// services/ProductService.js
const Worker_service = {
  async set_default_message(worker) {
    worker.onmessage = (e) => {
      const message_id = e.data[0];
      const message = e.data[1];
      switch (message_id) {
        case "log_message":
          console.log("llllllllllllllll");
          console.log(message);
          console.log(message_id);
          console.log("lllllllllllllllllll");

          //log.info(argumentos);
          break;
        case "iniciado":
          [$nombre, $fechaNacimiento, $insertar, $obtener].forEach(
            (elemento) => (elemento.disabled = false),
          );
          break;
        case "persona_insertada":
          console.log(message);
          //log.info("...persona insertada");
          break;

        case "log_message":
          console.log(message);
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
  },
  async post_message(worker, id, message) {
    return new Promise((resolve, reject) => {
      const messageHandler = (e) => {
        const _id = e.data[0];
        const _message = e.data[1];
        if (_id === id) {
          worker.removeEventListener("message", messageHandler);
          worker.removeEventListener("error", errorHandler);
          resolve(_message);
        }
      };

      const errorHandler = (error) => {
        worker.removeEventListener("message", messageHandler);
        worker.removeEventListener("error", errorHandler);
        reject(error);
      };

      worker.addEventListener("message", messageHandler);
      worker.addEventListener("error", errorHandler);

      worker.postMessage([id, message]);
    });
  },
};

export default Worker_service;

// services/ProductService.js
//import { ref, onMounted, inject } from "vue";
//const worker = new Worker(new URL("./db_worker.js", import.meta.url), {
//  type: "module",
//});

/*
const log = inject("log");

worker.onmessage = (e) => {
  const action = e.data[0];
  const args = e.data[1];
  switch (action) {
    case "test":
      log.info("ffffffffF");
      break;
    case "log_message":
      console.log({ args });
      //log.info(argumentos);
      break;
  }
};

/*
worker.onmessage = (evento) => {
  const accion = evento.data[0];
  const argumentos = evento.data[1];
  switch (accion) {
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
export default worker;
*/
