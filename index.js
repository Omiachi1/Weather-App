const apiKey = "a3f6925754e95bc551cc6b2df71b6a10";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const weatherCondition = document.querySelector(".weatherCondition");

async function checkWeather (city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    setTimeout(function() {
    document.querySelector(".error").style.display = "none";
    }, 1500);
    };

    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " " + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " " + "km/hr";

    if(data.weather[0].main == "Clouds" ){
        weatherIcon.src = "images/clouds.png";
        weatherCondition.innerHTML = data.weather[0].main;
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
        weatherCondition.innerHTML = data.weather[0].main;
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src ="image/drizzle.png";
        weatherCondition.innerHTML = data.weather[0].main;
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        weatherCondition.innerHTML = data.weather[0].main;
    } 
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png";
        weatherCondition.innerHTML = data.weather[0].main;
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png";
        weatherCondition.innerHTML = data.weather[0].main;
    }
    
    console.log(data)
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
checkWeather();



