document.addEventListener("DOMContentLoaded", () => {
  const $day = document.getElementById("day"),
    $hour = document.getElementById("hour"),
    $minutes = document.getElementById("minuts"),
    $seconds = document.getElementById("seconds");

  const obtainDate = () => {
    let date = new Date(),
      dateDay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate(),
      dateHour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
      dateMinutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      dateSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

    $day.textContent = dateDay;
    $hour.textContent = dateHour;
    $minutes.textContent = dateMinutes;
    $seconds.textContent = dateSeconds;
  };

  obtainDate();
  setInterval(obtainDate, 1000);
});
