//Configurando el scroll suavizado
const smoothScroll = (target, duration) => {
  //Pasamos el elemento a donde nos queremos direccionar al realizar click para Scroll(al elemento objetivo)
  target = $brandHeader;
  //Posicion de nuestro elemento (boton = subir) , getBoundi... nos muestra varios resultados, solo usaremos top. Esto aplica desde el comienzo de la pantalla hasta el boton. Es la posicion de nuestro elemento objetivo
  let targetPosition = target.getBoundingClientRect().top;
  //Esta posicion es relativo a la ventana y no al elemento.
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  //Se establece en nulo, porque dsps se llamará con requestAnim... ,
  let startTime = null;

  const animationScroll = (currentTime) => {
    //Iniciamos la variable starTime con el current time
    if (startTime === null) startTime = currentTime;
    //Tiempo actual menos el tiempo de inicio
    let timeElapsed = currentTime - startTime;
    // Prim param. : Tiempo transcurrido / Seg. param. : Posicion inicial / Ter. param: Distancia / Cuarto param: Duracion de retorno de scroll
    let run = ease(timeElapsed, startPosition, distance, duration);
    //Scroll de forma vertical
    window.scrollTo(0, run);
    //Este if se ejecuta solo cuando sea menor a la duracion del tiempo transcurrido , la cual nosotros le hemos pasado por argumento
    if (timeElapsed < duration) requestAnimationFrame(animationScroll);
  };
  //Función matematica que permite suavizar al momento de realizar scroll , (pagina http://www.gizma.com/easing/)
  const ease = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t * t * t + 2) + b;
  }; //Activamos el AnimationFrame , llamamos a la función que va a animar , y el reques.. animara a 60fps
  requestAnimationFrame(animationScroll);
};
//SOLO INSTANCIAR DSPS EL METODO
// smoothScroll(".brand", 100);
