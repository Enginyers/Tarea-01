let arrayStorage = JSON.parse(localStorage.getItem("datos"));

let nomPersonaje = localStorage.getItem("personaje");

cargaDetalle();

function cargaDetalle() {
  let div = document.getElementById("container");

  let arrayDatos = arrayStorage.find(
    function (e) {
      return e.nombre == nomPersonaje.toString();
    }
    // (e) => e.nombre == nomPersonaje.toString()
  );
  // console.log(arrayDatos.nombre);

  let img = document.createElement("img");

  // //creo la nueva estructura -diseño para mostrar el detalle
  let container = document.getElementById("container");

  let container_grid = document.createElement("div");
  container_grid.classList.add("container-grid");
  let container_btn_volver = document.createElement("div");
  container_btn_volver.classList.add("container-btn-volver");
  const newText = document.createElement("a");
  newText.setAttribute("href", "Tarea-01/index.html");
  newText.classList.add("btn-volver");
  newText.textContent = "volver";
  let divDetalle = document.createElement("div");
  divDetalle.classList.add("container-detalle");
  let divImagen = document.createElement("div");
  divImagen.classList.add("tres");
  let divDatos = document.createElement("div");
  divDatos.classList.add("tres");
  let titulo = document.createElement("h2");
  titulo.textContent = arrayDatos.nombre;
  let texto = document.createElement("p");
  texto.textContent = arrayDatos.det;

  container.appendChild(container_grid);
  container_grid.appendChild(container_btn_volver);
  container_btn_volver.appendChild(newText);
  container_grid.appendChild(divDetalle);
  divDetalle.appendChild(divImagen);
  divDetalle.appendChild(divDatos);
  divDatos.appendChild(titulo);
  divDatos.appendChild(texto);

  //cargara las imagenes para cada personaje
  let url = mostrarDetalle(arrayDatos.posicion);
  // console.log(url);
  img.setAttribute("src", url);
  divImagen.appendChild(img);
}

function mostrarDetalle(value) {
  let urlImage;

  //destructuring del array
  let [
    golem,
    bruja,
    caballero,
    dragon,
    goblin,
    arquero,
    pillos,
    minero,
    montaPuercos,
    pekka,
    principe,
  ] = arrayStorage;

  switch (value) {
    case 0:
      urlImage = golem.url; //
      break;

    case 1:
      urlImage = bruja.url; //"/assets/img/bruja.png";
      break;

    case 2:
      urlImage = caballero.url;
      break;

    case 3:
      urlImage = dragon.url;
      break;

    case 4:
      urlImage = goblin.url; //
      break;

    case 5:
      urlImage = arquero.url; //"/assets/img/bruja.png";
      break;

    case 6:
      urlImage = pillos.url;
      break;

    case 7:
      urlImage = minero.url;
      break;

    case 8:
      urlImage = montaPuercos.url; //"/assets/img/bruja.png";
      break;

    case 9:
      urlImage = pekka.url;
      break;

    case 10:
      urlImage = principe.url;
      break;
  }

  return urlImage;
}
