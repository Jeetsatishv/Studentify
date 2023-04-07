import React from 'react'

export const Weather = () => {
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
        document.querySelector(".weather").classNameList.remove("loading");
      },
      search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
      },
    };
    
    function handleSearch() {
      weather.search();
    }
    
    function handleKeyUp(event) {
      if (event.key === "Enter") {
        weather.search();
      }
    }
    
      weather.fetchWeather("Boston");
    
    return(
        <div className = "card">
            <div className="search">
              <input type="text" className="search-bar" onKeyUp={handleKeyUp} />
              <button onClick={handleSearch}>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
            <div className="weather loading">
              <h2 className="city">Weather in Boston</h2>
              <h1 className="temp">70°F</h1>
              <div className="flex">
                <img src="https://openweathermap.org/img/wn/04n.png" alt="" className="icon" />
              <div className="description">Cloudy</div>
            </div>
              <div className="humidity">Humidity: 50%</div>
              <div className="wind">Wind speed: 6.2 mp/h</div>
            </div>
        </div>
    )}