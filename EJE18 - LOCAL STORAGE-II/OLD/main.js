document.addEventListener("DOMContentLoaded", () => {
  const $txtname = document.getElementById("txtname");
  const $txtlastName = document.getElementById("txtlastName");
  const $btnShow = document.getElementById("btnShow");
  const $btnDelete = document.getElementById("btnDelete");
  const $ul = document.createElement("ul");
  const $fragmentUl = document.createDocumentFragment();
  let i = 1;
  const inputClear = () => {
    $btnShow.disabled = false;
    $btnDelete.disabled = false;
    $txtname.value = "";
    $txtlastName.value = "";
  };

  const addNames = (name, lastName) => {
    console.log(`Nombres Completos: ${name} ${lastName}`);
    i++;
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
          localStorage.setItem(`name-${i}`, $txtname.value);
          localStorage.setItem(`lastName-${i}`, $txtlastName.value);
          let name = localStorage.getItem(`name-${i}`),
            lastName = localStorage.getItem(`name-${i}`);
          addNames(name, lastName);
          inputClear();
          console.log(localStorage);
        }
      }
    }

    if (e.target.matches("#btnShow")) {
      $ul.appendChild($fragmentUl);
      document.body.appendChild($ul);
    }

    if (e.target.matches("#btnDelete")) {
      i--;
      localStorage.removeItem(`name-${i}`);
      localStorage.removeItem(`lastName-${i}`);
      if ($ul.children.length > 0) {
        $ul.removeChild($ul.lastElementChild);
      }
    }
  });
});
