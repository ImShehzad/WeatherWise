const apiKey = "54d65225555380f99b88d59155c7f96f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "Images/clouds.jpg";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.jfif";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.jfif";
    }
    else if(data.weather[0].main == "Drizzles"){
        weatherIcon.src = "Images/drizzle.jfif";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.jfif";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }  
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})