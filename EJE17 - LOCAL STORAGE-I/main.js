document.addEventListener("DOMContentLoaded", () => {
  //DECLARACION DE VARIABLES
  const $txtname = document.getElementById("txtname");
  const $txtlastName = document.getElementById("txtlastName");
  const $btnShow = document.getElementById("btnShow");
  const $ul = document.createElement("ul");
  const $fragmentUl = document.createDocumentFragment();

  const inputClear = () => {
    $btnShow.disabled = false;
    $txtname.value = "";
    $txtlastName.value = "";
  };

  const addNames = (name, lastName) => {
    console.log(`Nombres Completos: ${name} ${lastName}`);
    const $li = document.createElement("li");
    $li.textContent = `${name} ${lastName}`;
    $fragmentUl.appendChild($li);
  };

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnSave")) {
      if (!$txtname.value || !$txtlastName.value) {
        alert("Debes completar todos los cuadros");
        e.preventDefault();
      } else {
        if (typeof Storage === "undefined") {
          alert("El navegador no es compatible para utililizar localStorage");
        } else {
          localStorage.setItem("name", $txtname.value);
          localStorage.setItem("lastName", $txtlastName.value);
          let name = localStorage.getItem("name"),
            lastName = localStorage.getItem("lastName");

          addNames(name, lastName);
          inputClear();
        }
      }
    }

    if (e.target.matches("#btnShow")) {
      $ul.appendChild($fragmentUl);
      document.body.appendChild($ul);
    }
  });
});
