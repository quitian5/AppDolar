const contenedor = document.getElementById("contenedor");

let aEscribir;

fetch("https://dolarapi.com/v1/dolares")
  .then((resultado) => resultado.json())
  .then((dolares) => {
    dolares.forEach((dolar) => {
      const tarjeta = document.createElement("div");

      tarjeta.classList.add("tarjeta");

      aEscribir = `<h2> Dolar ${dolar.nombre} </h2>
        <h3>Compra: ${dolar.compra} ARS </h3>
        <h3>Venta: ${dolar.venta} ARS </h3>
        <h3>Casa: ${dolar.casa}</h3>
        <h3>Nombre: ${dolar.nombre}</h3>
        <h3>Moneda: ${dolar.moneda}</h3>
        <h3>Fecha de actualizacion: ${dolar.fechaActualizacion}</h3>`;
      tarjeta.innerHTML= aEscribir;
      contenedor.append(tarjeta);
    });
  })
  .catch((e) => {
    console.error(e);
    aEscribir = `<p>Error al obtener los datos del Dolar Blue </p>`;
  });
