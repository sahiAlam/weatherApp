const inputValue = document.querySelector(".search_area");

// Rapid Api Code
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "cb2b799f0cmsh9d8895e0c0907d7p14561ajsnace74d006225",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

// Gatting weather function
const getWeather = async (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));

  cityName.style.textTransform = "capitalize";
};

// Event to submit the weather
submit.addEventListener("click", (e) => {
  e.preventDefault();
  return validate();
});

const validate = () => {
  if (inputValue.value.trim() == "") {
    alert("Please Enter your City");
    return false;
  } else {
    getWeather(inputValue.value);
    inputValue.value = "";
  }
};

// Default location
getWeather("Delhi");