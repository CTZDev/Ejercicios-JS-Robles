document.addEventListener("DOMContentLoaded", () => {
  const $ul = document.createElement("ul");
  const $fragmentUl = document.createDocumentFragment();

  const captureData = () => {
    const http = new XMLHttpRequest();
    const url = "./test.json";
    http.open("GET", url);
    http.send();

    http.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        let result = JSON.parse(this.responseText);
        result.listadoPaises.paises.forEach((pais) => {
          const $li = document.createElement("li");
          $li.textContent = `Nombre: ${pais.nombre}  // Capital: ${pais.capital} // Texto de Capital: ${pais.textoCapital} // Ciudades: ${pais.ciudadImportante}`;
          $fragmentUl.appendChild($li);
        });

        document.body.appendChild($ul);
        $ul.innerHTML = `<h3>Articulos - PAISES</h3>`;
        $ul.appendChild($fragmentUl);
      }
    };
  };

  captureData();
});
