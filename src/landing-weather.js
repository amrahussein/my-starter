import fetchUrl from './fetcher';

// SELECTORS
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');
const cityName = document.getElementById('cityName');
const loading = document.getElementById('loading');
const region = document.getElementById('region');

const weatherInput = document.getElementById('weatherInput');
const locationInput = document.getElementById('locationInput');

// testing key
const API_KEY = 'f8b96e7e027d43b3b9c10901230401';
const BASE_API_URL = 'https://api.weatherapi.com/v1/current.json';
// api key for open weather api

document.addEventListener('DOMContentLoaded', () => {
  const fetchWeatherInfo = async () => {
    // weather value defaulted to 'Cairo' if no input specified...
    const locationFromUser = locationInput.value ? locationInput.value : null;
    const queryString = {
      key: API_KEY,
      q: locationFromUser ?? 'Cairo',
      aqi: 'no',
    };

    try {
      const response = await fetchUrl(BASE_API_URL, queryString);

      return {
        location: response.location,
        current: response.current,
      };
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateUI = async () => {
    try {
      const { location, current } = await fetchWeatherInfo();

      // simulate a spinner, display none of spinner which is loading by default
      loading.style.display = 'none';

      // render current location
      cityName.innerText = location.name;
      region.innerText = location.region;

      // render current infos
      const span = document.createElement('span');
      span.innerText = ' ℃';
      temperature.innerText = current.temp_c;
      temperature.append(span);
      condition.innerText = current.condition.text;
    } catch (error) {
      console.error(error.message);
    } finally {
      loading.style.display = 'none';
    }
  };

  const handleWeather = (e) => {
    e.preventDefault();
    updateUI();

    // reset user input after submit
    locationInput.value = '';
  };

  updateUI();
  weatherInput.addEventListener('submit', handleWeather);
});
