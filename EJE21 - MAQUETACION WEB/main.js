document.addEventListener("DOMContentLoaded", () => {
  const $slideImage = document.querySelectorAll(".slide-image");
  const $slideContainer = document.querySelector(".slides-container");
  const $navigationDots = document.querySelector(".navigation-dots");
  const $dots = document.querySelectorAll(".single-dot");

  let numberOfImages = $slideImage.length;
  let slideWidth = $slideImage[0].clientWidth; // Tamaño de la imagen
  let currentSlide = 0; // Usado como indice

  //Inicializa el slide con estos valores por defecto (Configurando slide)
  function init() {
    /*  slideImage[0] = 0%;  //  slideImage[1] = 100%;  //  slideImage[2] = 200%; */
    //Permite al primer slide estar en left : 0 y el ultimo al 200%.
    $slideImage.forEach((image, i) => {
      image.style.left = i * 100 + "%";
    });
    //Inicializamos cada elemento HTML, y agregamos una clase
    $slideImage[0].classList.add("active"); //Activado el 1° slide
    $navigationDots.children[0].classList.add("active"); //Activado 1° dot
  }
  //Se inicializa
  init();

  //Traslada en X , cada slide respecto al tamaño de la imagen. Se toma referencia 1° img
  const goToSlide = (slideNumber) => {
    $slideContainer.style.transform = `translateX(-${slideWidth * slideNumber}px)`;
    currentSlide = slideNumber; // Aqui vamos a ir modificando el slideNumber , por ende cambia el valor
    setActiveClass();
  };

  //Aqui llamamos el primer elemento que se asigno el active y eliminamos, dspas asignamos de acuerdo al inndex = currentSlide
  const setActiveClass = () => {
    //Set active class for slide image
    let currentActiveImage = document.querySelector(".slide-image.active");
    currentActiveImage.classList.remove("active");
    $slideImage[currentSlide].classList.add("active");

    //Set active class for navigation dots
    let currentActiveDot = document.querySelector(".single-dot.active");
    currentActiveDot.classList.remove("active");
    $navigationDots.children[currentSlide].classList.add("active");
  };

  window.addEventListener("resize", () => {
    slideWidth = $slideImage[0].clientWidth; // Tamaño de la imagen
  });

  document.addEventListener("click", (e) => {
    //Btn Next // Valor de cd boton , evaluamos si llega a la ultima img , retornamos a 0, y vamos aumentando currentSlide
    if (e.target.matches(".btn-arrow__forward")) {
      if (currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
      }
      currentSlide++;
      goToSlide(currentSlide);
    }

    //Btn Prev // Valor de cd boton , va retrocediendo de img a img, y el currentSlide lo vamos disminuyendo
    if (e.target.matches(".btn-arrow__back")) {
      if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
      }
      currentSlide--;
      goToSlide(currentSlide);
    }
  });
  //Asignamos el al valor i , a cada boton que demos cliock , capturando el atributo del elemento HTML
  $dots.forEach((dot) =>
    dot.addEventListener("click", () => {
      let i = Number(dot.getAttribute("op_index"));
      goToSlide(i);
    })
  );
});
