document.getElementById("btnCargar").addEventListener("click", cargarProd);

function cargarProd() {
  fetch('datos.json')
    .then(res => res.json())
    .then(data => mostrarProd(data))
    .catch(err => console.error("Error leyendo JSON:", err));
}

function mostrarProd(lista) {
  const cont = document.getElementById("contenedor");
    cont.innerHTML = "";

    lista.forEach(produ => {
      cont.innerHTML += `
        <div class="card">
          <img src="${produ.img}" id="image">
            <h2>${produ.nombre}</h2>
            <p><strong>Descripción:</strong> ${produ.desc}</p>
          <p><strong>Precio:</strong> $${produ.precio}</p>
      </div>
    `;
  });
}