// services/ProductService.js

const worker = new Worker(new URL("./db_worker.js", import.meta.url), {
  type: "module",
});

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
