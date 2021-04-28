document.addEventListener("DOMContentLoaded", () => {
  const $div = document.createElement("div");
  const $date = document.createTextNode(`Fecha estandar: ${new Date().toLocaleDateString()}`);
  const $title = document.createElement("h3");
  const $titleText = document.createTextNode("Numeros aleatorios (1 a 120)");
  document.body.appendChild($div);

  console.log($date);

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnShow")) {
      $div.insertBefore($date, $div.firstElementChild);
      $title.appendChild($titleText);
      $div.insertBefore($title, $div.firstElementChild);
      numberRandom();
    }
  });

  const numberRandom = () => {
    let random = Math.round(Math.random() * 120);
    const $paragraphRandom = document.createElement("p");
    $paragraphRandom.textContent = random;
    $div.appendChild($paragraphRandom);
    console.log($paragraphRandom);
  };
});
