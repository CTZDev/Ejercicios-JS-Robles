document.addEventListener("DOMContentLoaded", () => {
  //VARIABLES - BACKGROUND
  const $container = document.querySelector(".container");
  const $iAm = document.querySelector(".iAm");
  //VARIABLES - SLIDER
  const $slideImage = document.querySelectorAll(".slide-image");
  const $slideContainer = document.querySelector(".slides-container");
  const $navigationDots = document.querySelector(".navigation-dots");
  const $dots = document.querySelectorAll(".single-dot");
  //VARIABLES - SCROLL SUAVIZADO
  const $goScrollTop = document.querySelector(".scroll-top");

  let numberOfImages = $slideImage.length;
  let slideWidth = $slideImage[0].clientWidth; // Tamaño de la imagen
  let currentSlide = 0; // Usado como indice
  //Inicializa el slide con estos valores por defecto (Configurando slide)
  const init = () => {
    /*  slideImage[0] = 0%;  //  slideImage[1] = 100%;  //  slideImage[2] = 200%; */
    //Permite al primer slide estar en left : 0 y el ultimo al 200%.
    $slideImage.forEach((image, i) => {
      image.style.left = i * 100 + "%";
    });
    //Inicializamos cada elemento HTML, y agregamos una clase
    $slideImage[0].classList.add("active"); //Activado el 1° slide
    $navigationDots.children[0].classList.add("active"); //Activado 1° dot
    $goScrollTop.classList.add("scroll-hidden"); //Empieza activo
  };
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

  //Configurando el background -cambio de fondo
  const updateBackground = () => {
    $container.style.transition = "1s ease";
    $container.style.color = "white";
    $iAm.style.transition = "1s ease";
    $iAm.style.color = "black";
  };

  //Configurando el Scroll
  const totalPixelsPage = () => document.documentElement.scrollTop || document.body.scrollTop;

  const smoothScroll = () => {
    if (totalPixelsPage() > 0) {
      requestAnimationFrame(smoothScroll);
      scrollTo(0, totalPixelsPage() - totalPixelsPage() / 25);
    }
  };

  const btnsCrollVisibility = () => {
    let measureTotalBottom = document.documentElement.scrollHeight - (totalPixelsPage() + document.documentElement.clientHeight);
    if (measureTotalBottom > 100) {
      $goScrollTop.classList.remove("scroll-show");
      $goScrollTop.classList.add("scroll-hidden");
    } else {
      $goScrollTop.classList.remove("scroll-hidden");
      $goScrollTop.classList.add("scroll-show");
    }
  };

  const effectAcordeon = () => {
    const $menu_item = document.querySelectorAll(".menu__item")[2];
    const $submenu = document.querySelector(".submenu");
    $menu_item.addEventListener("click", () => {
      $submenu.classList.toggle("active");
    });
  };

  effectAcordeon();

  window.addEventListener("scroll", btnsCrollVisibility);

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

    if (e.target.matches(".btn--green")) {
      $container.style.backgroundColor = "rgb(0, 102, 0)";
      $iAm.style.backgroundColor = "rgb(0, 102, 0)";
      updateBackground();
    }
    if (e.target.matches(".btn--redlight")) {
      $container.style.backgroundColor = "rgb(247, 39, 39)";
      $iAm.style.backgroundColor = "rgb(247, 39, 39)";
      updateBackground();
    }
    if (e.target.matches(".btn--skyblue")) {
      $container.style.backgroundColor = "rgb(1, 98, 136)";
      $iAm.style.backgroundColor = "rgb(1, 98, 136)";
      updateBackground();
    }

    if (e.target.matches(".scroll-top")) {
      smoothScroll();
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
