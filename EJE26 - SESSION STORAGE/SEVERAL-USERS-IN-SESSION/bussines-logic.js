const addFriendToSystem = (name, lastName) => {
  //Objeto creado para cada amuigo ingresado, luego se ingresarán todos dentro de un arreglo
  const user = {
    name,
    lastName,
    // id: generateIdOfUsers(),
  };

  sessionStorageUserSave(user);
  return user;
};

//Almacena cada objeto dentro de un arreglo en localStorage, aplica para cada amigo creado
const sessionStorageUserSave = (user) => {
  //Obtengo y parseamos con JSON la lista que guardamos con el setitem , si no hay ningun dato, devuelve array vacio, uso de ||
  let storedList = JSON.parse(sessionStorage.getItem("userList")) || [];
  //Agregamos el objeto newFriend al arreglo
  storedList.push(user);
  //Parseamos todo a JSON en esta funcion
  let userListInJSON = JSON.stringify(storedList);
  sessionStorage.setItem("userList", userListInJSON);
};

// const generateIdOfUsers = () => {
//   let lastUserId = localStorage.getItem("userId") || "-1";
//   let newUserId = JSON.parse(lastUserId) + 1;
//   localStorage.setItem("userId", JSON.stringify(newUserId));
//   return newUserId;
// };

const sessionStorageUser = (nameUser, lastNameUser) => {
  let storedList = sessionStorage.getItem("userList");
  let seeUser = JSON.parse(storedList);
  if (seeUser === null) return null;

  let userLogin = seeUser.findIndex((element) => element.name === nameUser && element.lastName === lastNameUser);
  sessionStorage.setItem("userList", JSON.stringify(seeUser));
  return userLogin;
};
