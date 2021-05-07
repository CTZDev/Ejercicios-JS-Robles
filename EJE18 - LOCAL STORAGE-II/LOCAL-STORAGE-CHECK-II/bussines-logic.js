const addFriendToSystem = (name, country, birthday, email) => {
  //Objeto creado para cada amuigo ingresado, luego se ingresarán todos dentro de un arreglo
  const newFriend = {
    name,
    country,
    birthday,
    email,
    id: localStorageGenerateNewId(), // Creado dinamicamente
  };

  localStorageFriendList(newFriend);
  return newFriend;
};

//Almacena cada objeto = "nuevo amigo" dentro de un arreglo en localStorage, aplica para cada amigo creado
const localStorageFriendList = (listFriend) => {
  //Obtengo y parseamos con JSON la lista que guardamos con el setitem , si no hay ningun dato, devuelve array vacio, uso de ||
  let storedListFriends = JSON.parse(localStorage.getItem("friendList")) || [];
  //Agregamos el objeto newFriend al arreglo
  storedListFriends.push(listFriend);
  //Parseamos todo a JSON en esta funcion
  convertDataInJson(storedListFriends);
};

//Almacena el Identificador de cada elemento creado, lo colocamos dentro del objeto (propiedad: valor)=> id: localStorageGenerate...
const localStorageGenerateNewId = () => {
  //Obtenemos el identificador, si no existe ningun ID (No se ingreso ningun registtro), colocamos -1 por defecto
  let lastFriendId = localStorage.getItem("lastFriendId") || "-1";
  //Parseamos la lista de Id y sumamos 1, empezará por defecto en 0
  let newFriendId = JSON.parse(lastFriendId) + 1;
  //Ahora para almacenarlo en el localStorage, parseamos nuevamente en JSON
  localStorage.setItem("lastFriendId", JSON.stringify(newFriendId));
  //Retornamos el valor actual que tiene el ID que se aumento
  return newFriendId;
};

//Eliminar del Local Storage un elemento
const localStorageFriendDelete = (friendId) => {
  //Parseamos tgodo lo que tenemos dentro de la lista de arreglo de Amigos.
  let storedListFriends = JSON.parse(localStorage.getItem("friendList"));
  //Buscamos dentro el id, que nosotros queremos eliminar, el cual lo pasaremos como argumento de la funcion
  const indexIdFriend = storedListFriends.findIndex((friend) => friend.id === parseInt(friendId));
  //Eliminamos el elemento encontrado, colocamos 1 para decir que queremos borrar solo ese elemento
  storedListFriends.splice(indexIdFriend, 1);
  //Ahora parseamos nuevamente nuestro REGISTRO con JSON.
  convertDataInJson(storedListFriends);
};

//Conversion de objetos (array, objeto) a string con JSON
const convertDataInJson = (storedListFriends) => {
  //Convierto mi array a JSON (string)
  let storageFriendInJSON = JSON.stringify(storedListFriends);
  //Guardo en el local storage el array, y en formato JSON , LOCALSTORAGE solo acepta STRING
  localStorage.setItem("friendList", storageFriendInJSON);
};
