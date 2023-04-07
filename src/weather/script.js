let weather = { 

  "apiKey": "dab2b3335ee04f41959214009230304",
  fetchWeather: function(city) {
      fetch("https://api.weatherapi.com/v1/current.json?key=dab2b3335ee04f41959214009230304&q="+ city      
      ).then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
displayWeather: function(data) {
  const{name} = data.location;
  const{text} = data.current.condition;
  const{temp_f} = data.current;
  const{humidity} = data.current;
  const{gust_mph} = data.current;
  document.querySelector(".city").innerText = "Weather in " + name;

  document.querySelector(".description").innerText = text;
  document.querySelector(".temp").innerText = temp_f + "°F";
  document.querySelector(".humidity").innerText =
    "Humidity: " + humidity + "%";
  document.querySelector(".wind").innerText =
    "Wind speed: " + gust_mph + " mp/h";
  document.querySelector(".weather").classList.remove("loading");
},
search: function () {
  this.fetchWeather(document.querySelector(".search-bar").value);
},
};

document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document
.querySelector(".search-bar")
.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Boston");
