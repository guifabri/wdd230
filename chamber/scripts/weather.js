const apiKey = "eab4722df416e8205ba55ea74c45e341";


const lat = 7.813558;
const lon = -72.444585;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error(error);
    }
}
apiFetch();

function displayResults(data) {
    const location = document.querySelector("#location");

    const tempArea = document.querySelector(".temp-area");

    const captionDesc = document.querySelector("#weather-description");
    const feelsLike = document.querySelector("#feels-like");
    const windSpeed = document.querySelector("#wind-speed");
    const humidity = document.querySelector("#humidity");

    const weatherIcon = document.createElement("img");
    tempArea.appendChild(weatherIcon);

    const currentTemp = document.createElement("span");
    currentTemp.setAttribute("id", "current-temp");
    tempArea.appendChild(currentTemp);

    location.innerHTML = data.name;
    // Format temperature to show zero decimal points
    const formattedTemp = data.main.temp.toFixed(0);
    // Display current temperature
    currentTemp.innerHTML = `${formattedTemp}&deg;F`;
    feelsLike.innerHTML = `${data.main.feels_like.toFixed(0)}&deg;F`;
    windSpeed.innerHTML = `${data.wind.speed.toFixed(0)}mph`;
    humidity.innerHTML = `${data.main.humidity}%`;

    // Display weather icon and description
    data.weather.forEach((weatherEvent) => {
        const iconsrc = `https://openweathermap.org/img/wn/${weatherEvent.icon}@2x.png`;
        let desc = weatherEvent.description;
        weatherIcon.setAttribute("src", iconsrc);
        weatherIcon.setAttribute("alt", desc);
        weatherIcon.setAttribute("width", "100");
        weatherIcon.setAttribute("height", "100");
        captionDesc.innerHTML = `${desc}`;
    });
}
//-----------------------------------
// URL de la API
const apiURL = "https://api.openweathermap.org/data/2.5/forecast?lat=49.7497&lon=6.6371&units=imperial&appid=eab4722df416e8205ba55ea74c45e341";

// Obtener elementos HTML
const days = [
  document.getElementById("day1"),
  document.getElementById("day2"),
  document.getElementById("day3")
];

// Función para convertir el código del icono en URL
function getWeatherIcon(icon) {
  return `https://openweathermap.org/img/wn/${icon}.png`;
}

// Función para formatear la fecha
function formatDate(dateStr) {
  const options = { weekday: "long" }; // Día de la semana
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", options);
}

// Obtener y procesar datos
const forecastContainer = document.getElementById("forecast");

  // Función para crear dinámicamente los elementos de cada día
  function createDayDivs(dayIndex) {
    const dayDiv = document.createElement("div");
    dayDiv.id = `day${dayIndex}`;

    const weekdayDiv = document.createElement("div");
    weekdayDiv.id = `weekday${dayIndex}`;

    const dayIconDiv = document.createElement("div");
    dayIconDiv.id = `dayIcon${dayIndex}`;

    const dayTempDiv = document.createElement("div");
    dayTempDiv.id = `dayTemp${dayIndex}`;

    dayDiv.appendChild(weekdayDiv);
    dayDiv.appendChild(dayIconDiv);
    dayDiv.appendChild(dayTempDiv);

    return dayDiv;
  }

  // Crear dinámicamente los días (1, 2, 3)
  for (let i = 1; i <= 3; i++) {
    const dayDiv = createDayDivs(i);
    forecastContainer.appendChild(dayDiv);
  }
function createForecastElements() {
    const forecastContainer = document.getElementById("forecast");

    for (let i = 1; i <= 3; i++) {
      const dayDiv = document.createElement("div");
      dayDiv.id = `day${i}`;

      const weekdayDiv = document.createElement("div");
      weekdayDiv.id = `weekday${i}`;

      const dayIconDiv = document.createElement("div");
      dayIconDiv.id = `dayIcon${i}`;

      const dayTempDiv = document.createElement("div");
      dayTempDiv.id = `dayTemp${i}`;

      dayDiv.appendChild(weekdayDiv);
      dayDiv.appendChild(dayIconDiv);
      dayDiv.appendChild(dayTempDiv);

      forecastContainer.appendChild(dayDiv);
    }
  }
  // Llamada a la API y relleno de datos
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      const dailyData = data.list
        .filter((item) => item.dt_txt.includes("12:00:00"))
        .slice(0, 3);

      dailyData.forEach((day, index) => {
        const dayIndex = index + 1;
        document.getElementById(`weekday${dayIndex}`).textContent = formatDate(day.dt_txt);
        document.getElementById(`dayIcon${dayIndex}`).innerHTML = `<img src="${getWeatherIcon(
          day.weather[0].icon
        )}" alt="${day.weather[0].description}">`;
        document.getElementById(`dayTemp${dayIndex}`).innerHTML = `${Math.round(
          day.main.temp
        )}°F <br> RealFeel ${Math.round(day.main.feels_like)}°F`;
      });
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
createForecastElements();
fetch(apiURL);