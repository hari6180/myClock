const clock = document.querySelector("h2#clock");
const timer = document.querySelector("h2#timer");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

let min = 0;
let sec = 0;

function getTimer() {
  if (sec < 59) {
    setInterval(sec++, 1000);
  } else {
    sec = 0;
    min++;
  }

  const minutes = String(min).padStart(2, "0");
  const seconds = String(sec).padStart(2, "0");

  timer.innerText = `${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

setInterval(getTimer, 1000);
