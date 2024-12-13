const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#fig");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.7497&lon=6.6371&units=imperial&appid=eab4722df416e8205ba55ea74c45e341';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);

        } else {
            throw Error(await response.text());
        }
    }   catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc =`https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    console.log(iconsrc);
    let desc = data.weather[0].description;
    console.log(desc);
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',data.weather[0].main);
    captionDesc.innerHTML = `${desc}`;
}

apiFetch();
