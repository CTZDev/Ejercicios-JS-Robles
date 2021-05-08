document.addEventListener("DOMContentLoaded", () => {
  const $txtname = document.getElementById("txtname"),
    $txtlastName = document.getElementById("txtlastName"),
    $txtemail = document.getElementById("txtemail"),
    $txtmessage = document.getElementById("txtmessage"),
    $formContact = document.getElementById("form-contact");

  /**
   * Funcion que permite validar el nombre y el apellido del contacto a ingresar , expresion regular valida para nombres y apellidos internacionales
   * @param {String} name Nombre del contacto para validar
   * @param {String} lastname Apellido del contacto para validad
   * @returns {Boolean} Devuelve true si se cumple correctamente la expresion regular en nombres y apellidos
   */
  const validityNameAndLastName = (name, lastname) => {
    let expRegName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
    return !expRegName.test(name)
      ? alert("No se escribio correctamente los Nombres")
      : !expRegName.test(lastname)
      ? alert("No se escribio correctamente los Apellidos")
      : true;
  };

  /**
   * Funcion que permite la validacion de un correo electronico
   * @param {String} email Correo electronico del contacto para validar
   * @returns {Boolean} Retorna true si la expresion regular se cumple para el email
   */
  const validityEmail = (email) => {
    let expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return expRegEmail.test(email) ? true : alert("No se escribio correctamente el correo electronico");
  };

  /**
   * Funcion que comprueba la longitud del mensaje del contacto al formulario
   * @param {String} message Mensaje para comprobar la longitud de caracteres ingresados, debe ser menor a 150
   * @returns {Boolean} Deuelve true si el mensaje es mejor que la longitud asignada
   */
  const validityMessage = (message) => {
    return message.length > 150 ? alert("El mensaje no puede tener mas de 150 caracteres") : true;
  };

  /**
   * Funcion que genera una respuesta de envio de formulario a la web
   * @param {String} name Nombre del cotacto
   * @param {String} lastname Apellidos del contacto
   * @param {String} email Correo electronico del contacto (usuario)
   * @param {String} message Mensaje a enviar por parte del contacto
   */

  const generateContact = (name, lastname, email, message) => {
    if (!name || !lastname || !email || !message) return alert("Ingresaste un campo vacio");
    if (validityNameAndLastName(name, lastname) && validityEmail(email) && validityMessage(message)) {
      alert("FORMULARIO ENVIADO CORRECTAMENTE");
      $formContact.reset();
    }
  };

  document.addEventListener("submit", (e) => {
    if (e.target.matches("#form-contact")) {
      generateContact($txtname.value, $txtlastName.value, $txtemail.value, $txtmessage.value);
    }
  });
});
