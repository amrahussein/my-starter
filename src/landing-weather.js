import fetchUrl from './fetcher';

// SELECTORS
let temperature = document.getElementById('temperature');
let condition = document.getElementById('condition');
let cityName = document.getElementById('cityName');
let region = document.getElementById('region');

let weatherInput = document.getElementById('weatherInput');
let locationInput = document.getElementById('locationInput');

// testing key
const API_KEY = 'f8b96e7e027d43b3b9c10901230401';
const BASE_API_URL = 'https://api.weatherapi.com/v1/current.json';
// api key for open weather api

document.addEventListener('DOMContentLoaded', () => {
  const fetchWeatherInfo = async () => {
    if (locationInput.value !== '') {
      const queryString = {
        key: API_KEY,
        q: locationInput.value,
        aqi: 'no',
      };

      try {
        const response = await fetchUrl(BASE_API_URL, queryString);
        return {
          location: response.location,
          current: response.current,
        };
      } catch (error) {}
    }
  };

  const updateUI = async () => {
    const { location, current } = await fetchWeatherInfo();

    // render current location
    cityName.innerText = location.name;
    region.innerText = location.region;

    // render current infos
    const span = document.createElement('span');
    span.innerText = ' ℃';
    temperature.innerText = current.temp_c;
    temperature.append(span);
    condition.innerText = current.condition.text;
  };

  const handleWeather = (e) => {
    e.preventDefault();
    updateUI();
  };

  weatherInput.addEventListener('submit', handleWeather);
});
