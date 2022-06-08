// alert("enlazado");

import { datos } from "../module/data.js";
// console.log("impor " + datos);

localStorage.setItem("datos", JSON.stringify(datos));

document.addEventListener("DOMContentLoaded", function () {
  asignaPersonajes();
  cargaDetalle();
});

// Asigna los nombres a los personajes correspondientes
function asignaPersonajes() {
  for (let i = 0; i < datos.length; i++) {
    let button = document.querySelector("#button-name" + i);
    const newText = document.createElement("a");
    newText.textContent = datos[i].nombre;

    button.appendChild(newText);
  }
}

function cargaDetalle() {
  for (let i = 0; i < datos.length; i++) {
    let clic_button = document.getElementById("button-name" + i);

    let img = document.querySelector("img");

    // evento click del boton para ver detalle
    clic_button.addEventListener("click", function () {
      // console.log("boton " + clic_button);
      // console.log("sd" + datos[i].nombre);
      // console.log(i);
      localStorage.setItem("personaje", datos[i].nombre);
      window.location.href = "/assets/pages/detalle.html";
    });
  }
}
