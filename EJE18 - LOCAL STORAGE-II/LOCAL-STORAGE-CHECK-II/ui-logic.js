document.addEventListener("DOMContentLoaded", () => {
  const saveDataListFriend = () => {
    const $txtName = document.getElementById("txtName").value,
      $txtCountry = document.getElementById("txtCountry").value,
      $txtBirthday = document.getElementById("txtBirthday").value,
      $txtEmail = document.getElementById("txtEmail").value,
      $formFriend = document.getElementById("form-friend");

    if (!$txtName || !$txtCountry || !$txtBirthday || !$txtEmail) {
      alert("Completa todos los campos del formulario");
      return;
    }

    //Creamos una variable para almacenar lo que tiene la función, el return de esta función nos ayuda a ello.
    let newFriend = addFriendToSystem($txtName, $txtCountry, $txtBirthday, $txtEmail);
    // Agregamos todos los valores dentro de un obj.
    addFriendList(newFriend);
    //Establece todo el formulario a su valor inicial
    $formFriend.reset();
  };

  //Mostrar en el DOM, todo el contenido que se encuentra dentro del localStorage en "friendList"
  const showListFriends = () => {
    let listFriendInArray = JSON.parse(localStorage.getItem("friendList")) || [];
    listFriendInArray.forEach((friend) => {
      addFriendList(friend);
    });
  };

  //Agregar cada nuevo amigo dentro de una tabla
  const addFriendList = (newFriend) => {
    //Guardamos el tbody, ya que almacenaremos dentro de esa etiqueta toda nuestra tabla
    const $tbody = document.querySelector("#tblFriends tbody");
    //Almacena siempre en la ultima fila de la tabla insertRow(-1)
    //Los insertCell, agrega celdas vacias, respecto al valor dentro del parentesis.
    let row = $tbody.insertRow(-1),
      nameCell = row.insertCell(0),
      countryCell = row.insertCell(1),
      birthdayCell = row.insertCell(2),
      emailCell = row.insertCell(3),
      deleteCell = row.insertCell(4);

    //Asignamos el contenido de las celdas, los valores lo tomamos del return de newFriend
    nameCell.textContent = newFriend.name;
    countryCell.textContent = newFriend.country;
    birthdayCell.textContent = newFriend.birthday;
    emailCell.textContent = newFriend.email;

    //Asignamos un data-attribute, para almacenar el id dentro de la fila (NO SE VISUALIZA EN DOM)
    row.setAttribute("data-id", newFriend.id);

    //Creamos el boton Delete para cada amigo creado con determinadas propiedades.
    const $btnDelete = document.createElement("button");
    deleteCell.appendChild($btnDelete);
    $btnDelete.type = "button";
    $btnDelete.className = "btnDelete";
    $btnDelete.textContent = "Eliminar";
  };

  //Eliminamos el amigo que se encuentra disparando el evento
  const deleteFriendList = (e) => {
    //Obtenemos el elemento padre, el cual es el "tr" , que tiene el atributo data-id
    let currentRowFriend = e.target.parentNode.parentNode;
    // Almacenamos el valor que tiene dicho atributo
    let dataFriendId = currentRowFriend.getAttribute("data-id");
    //Eliminamos la fila con el boton Eliminar
    currentRowFriend.remove();
    //Eliminamos el elemento del localStorage.
    localStorageFriendDelete(dataFriendId);
  };
  //Cada vez que se cargue el DOMContentLoaded, los elementos del localStorage se visualizarán
  showListFriends();

  //Obtenemos el submit del formulario que tiene el id respectivo y al darle Submit, llamamos a la funcion saveData..
  document.addEventListener("submit", (e) => {
    if (e.target.matches("#form-friend")) {
      e.preventDefault();
      saveDataListFriend();
    }
  });

  //Al darle click a,lboton que dispara el evento delete, se elimina el registro, invocando a la funcion en cuestion.
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btnDelete")) {
      deleteFriendList(e);
    }
  });
});
