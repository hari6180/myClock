const clock = document.querySelector("h2#clock");
const timer = document.querySelector("h2#timer");
const clockButton = document.querySelector(".clock_btn");
const timerButton = document.querySelector(".timer_btn");

let min = 0;
let sec = 0;

const CHOSEN = "chosen";

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function getTimer() {
  if (sec < 59) {
    sec++;
  } else {
    sec = 0;
    min++;
  }
  const minutes = String(min).padStart(2, "0");
  const seconds = String(sec).padStart(2, "0");
  timer.innerText = `${minutes}:${seconds}`;
}

function changeClockMode(event) {
  event.preventDefault();
  clock.classList.remove(HIDDEN_CLASSNAME);
  timer.classList.add(HIDDEN_CLASSNAME);
  timerButton.classList.remove(CHOSEN);
  clockButton.classList.add(CHOSEN);
}

function changeTimerMode(event) {
  event.preventDefault();
  timer.classList.remove(HIDDEN_CLASSNAME);
  clock.classList.add(HIDDEN_CLASSNAME);
  clockButton.classList.remove(CHOSEN);
  timerButton.classList.add(CHOSEN);
}

clockButton.addEventListener("click", changeClockMode);
timerButton.addEventListener("click", changeTimerMode);

getClock();
setInterval(getTimer, 1000);
setInterval(getClock, 1000);
