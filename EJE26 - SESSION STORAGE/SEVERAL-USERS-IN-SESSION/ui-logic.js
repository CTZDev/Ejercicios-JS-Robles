document.addEventListener("DOMContentLoaded", () => {
  const saveDataUser = () => {
    const $name = document.getElementById("txtname").value,
      $lastName = document.getElementById("txtlastName").value,
      $form = document.getElementById("form-login");

    if (!$name || !$lastName) {
      alert("Debes completar correctamente tus datos");
      return;
    }

    validityUser($name, $lastName);
    $form.reset();
  };

  const validityUser = (name, lastName) => {
    let userStorage = sessionStorageUser(name, lastName);

    const addNewUser = () => {
      addFriendToSystem(name, lastName);
      alert(`Usuario Registrado: ${name} ${lastName}`);
    };

    if (userStorage === null) {
      addNewUser();
      return;
    }
    if (userStorage !== -1) {
      alert("Este usuario se encuentra activo en la sesion");
      return;
    }
    addNewUser();
  };

  document.addEventListener("submit", (e) => {
    if (e.target.matches("#form-login")) {
      e.preventDefault();
      saveDataUser();
    }
  });
});
