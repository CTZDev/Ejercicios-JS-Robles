/*LOGICA DE NEGOCIO - TODO RELACIONADO CON DATOS */
let friendList = []; //SINO CAMBIAR A VAR

const addFriendToSystem = (id, name, country, birthday, email) => {
  const newFriend = {
    id,
    name,
    country,
    birthday,
    email,
  };
  console.log(newFriend);
  friendList.push(newFriend);
  localStorageFriendList(friendList);
};

const getFriendList = () => {
  let storedList = localStorage.getItem("localFriendList");
  return (friendList = JSON.parse(storedList) || []);
};

const localStorageFriendList = (listFriend) => {
  localStorage.setItem("localFriendList", JSON.stringify(listFriend));
};
