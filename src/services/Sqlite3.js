// services/ProductService.js
import Product from "../models/Product";

let worker = new Worker(new URL("./db_worker.js", import.meta.url), {
  type: "module",
});
/*
const $iniciarBaseDeDatos = document.querySelector("#btnIniciarBaseDeDatos");
const $insertar = document.querySelector("#btnInsertar");
const $obtener = document.querySelector("#btnObtener");
const $nombre = document.querySelector("#nombre");
const $fechaNacimiento = document.querySelector("#fechaNacimiento");
const $contenedorPersonas = document.querySelector("#contenedorPersonas");

$insertar.addEventListener("click", () => {
  worker.postMessage([
    "insertar_persona",
    { nombre: $nombre.value, fechaNacimiento: $fechaNacimiento.value },
  ]);
});

$obtener.addEventListener("click", () => {
  worker.postMessage(["obtener_personas"]);
});

$iniciarBaseDeDatos.onclick = () => {
  worker.postMessage(["iniciar"]);
};
*/
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

class Products {
  async get() {
    let products = [
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
      { code: "xxx", name: "fff", category: "ccccc", quantity: "1111" },
    ];
    return products;
  }
}

export default Products;
