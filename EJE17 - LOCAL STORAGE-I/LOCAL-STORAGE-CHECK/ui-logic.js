/*LOGICA DE LA INTERFAZ DE USUARIO - PURO DOM*/
document.addEventListener("DOMContentLoaded", () => {
  const saveFriend = () => {
    let $id = document.getElementById("txtId").value,
      $name = document.getElementById("txtName").value,
      $country = document.getElementById("txtCountry").value,
      $birthday = document.getElementById("txtBirthday").value,
      $email = document.getElementById("txtEmail").value;

    addFriendToSystem($id, $name, $country, $birthday, $email);
    drawFriendList();
  };

  const drawFriendList = () => {
    let friends = getFriendList(),
      $tbodyFriend = document.querySelector("#tblFriends tbody");
    $tbodyFriend.innerHTML = "";

    friends.forEach((_, index) => {
      let row = $tbodyFriend.insertRow(index),
        idCell = row.insertCell(0),
        nameCell = row.insertCell(1),
        countryCell = row.insertCell(2),
        birthdayCell = row.insertCell(3),
        emailCell = row.insertCell(4),
        selectCell = row.insertCell(5);

      idCell.innerHTML = friends[index].id;
      nameCell.innerHTML = friends[index].name;
      countryCell.innerHTML = friends[index].country;
      birthdayCell.innerHTML = friends[index].birthday;
      emailCell.innerHTML = friends[index].email;

      let $inputSelect = document.createElement("input");
      $inputSelect.type = "radio";
      $inputSelect.value = friends[index].id;
      selectCell.appendChild($inputSelect);
    });
  };

  drawFriendList();

  document.addEventListener("click", (e) => {
    if (e.target.matches("#btnSaveFriend")) {
      saveFriend();
    }
  });
});
