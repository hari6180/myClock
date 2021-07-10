const API_KEY = "15394d2bac541d339080887904f2c537";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather_info span:first-child");
      const city = document.querySelector("#weather_info span:last-child");
      const icon = document.querySelector(`.weather_icon`);
      const icon_url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      icon.src = icon_url;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
