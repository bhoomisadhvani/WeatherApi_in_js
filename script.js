async function getWeather(event) {
  event.preventDefault();

  let city = document.getElementById("cityName").value.trim();

  if (city === "") {
    document.getElementById("result").innerHTML = "Please enter city name";
    return;
  }

  let apiKey = "e90785f35cd8a3df11750ac85cf65c18";

  let weather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    let res = await fetch(weather);

    let data = await res.json();

    if (data.cod == 200) {
      document.getElementById("result").innerHTML =
        "City: " +
        data.name +
        "<br>" +
        "Temperature: " +
        data.main.temp +
        " °C" +
        "<br>" +
        "Weather: " +
        data.weather[0].main;
    } else {
      document.getElementById("result").innerHTML = "City not found";
    }
  } catch (error) {
    document.getElementById("result").innerHTML = "Something went wrong";

    console.log(error);
  }
}

document.getElementById("weatherForm").addEventListener("submit", getWeather);
