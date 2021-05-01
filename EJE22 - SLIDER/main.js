document.addEventListener("DOMContentLoaded", () => {
  const $slider = document.querySelector(".slider"),
    $buttons = document.querySelectorAll(".btn"),
    $options = document.querySelectorAll(".option"),
    $slideImage = document.querySelectorAll(".slide-image");

  var index = 1;
  var sizeImage = $slideImage[index].clientWidth;
  var op_index = 0;

  //Funcion inicial - Empieza en la seg. imagen
  function init() {
    $slider.style.transform = `translateX(-${sizeImage * index}px)`;
    $options.forEach((option) => option.classList.remove("pointred"));
    $options[op_index].classList.add("pointred");
  }
  init();

  //Si llega al id next se suma 1 , si llega al id prev se resta 1
  function btnForwardOrBack(context) {
    if (context === "prev") {
      index--;
      if (op_index === 0) {
        op_index = 4;
      } else {
        op_index--;
      }
    } else if (context === "next") {
      if (op_index === 4) {
        op_index = 0;
      } else {
        op_index++;
      }
      index++;
    }
    slide();
  }

  function slide() {
    $slider.style.transition = "transform .4s ease-in-out";
    init();
  }

  function dotSelected() {
    let i = Number(this.getAttribute("op-index"));
    index = i + 1;
    op_index = i;
    slide();
  }

  document.addEventListener("transitionend", () => {
    if ($slideImage[index].id === "first") {
      $slider.style.transition = "none";
      index = $slideImage.length - 2;
      $slider.style.transform = `translateX(-${sizeImage * index}px)`;
    } else if ($slideImage[index].id === "last") {
      $slider.style.transition = "none";
      index = 1;
      $slider.style.transform = `translateX(-${sizeImage * index}px)`;
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn")) {
      btnForwardOrBack(e.target.id);
    }
  });

  $options.forEach((option) => option.addEventListener("click", dotSelected));
});
