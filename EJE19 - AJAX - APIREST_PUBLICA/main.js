document.addEventListener("DOMContentLoaded", () => {
  const $ul = document.createElement("ul");
  const $fragmentUl = document.createDocumentFragment();

  const captureDataOfAPI = (coinOfEvaluate) => {
    let urlApi = `https://mindicador.cl/api/${coinOfEvaluate}`;
    const api = new XMLHttpRequest();
    api.open("GET", urlApi);
    api.send();

    api.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        let result = JSON.parse(this.responseText);
        $ul.innerHTML = "";
        result.serie.forEach((r, i) => {
          const $li = document.createElement("li");
          $li.textContent = `Fecha ${i + 1}  =>  ${r.fecha.slice(0, 10)} || $ ${r.valor}`;
          $fragmentUl.appendChild($li);
        });

        document.body.appendChild($ul);
        $ul.innerHTML = `<h3>${coinOfEvaluate.toUpperCase()}</h3>`;
        $ul.appendChild($fragmentUl);
      }
    };
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnDollar")) {
      captureDataOfAPI("dolar");
    }
    if (e.target.matches("#btnUf")) {
      captureDataOfAPI("uf");
    }
  });
});
