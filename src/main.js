// handle routing by razy loading pages

// load the main style
import './sass/style.scss';

// Selectors
const app = document.getElementById('app-container');
const navigation = document.getElementById('nav');

// Wait HTML document to parse
document.addEventListener('DOMContentLoaded', () => {
  const routes = {
    '/': async () => {
      // load landing page
      let response = await fetch('./index.html');
      let html = await response.text();

      // append index html to the newly created html document
      app.innerHTML = html;
    },
    '/calculator': async () => {
      // load calculator page
      let response = await fetch('/features/calculator/index.html');
      let html = await response.text();

      app.innerHTML = html;
      try {
        await import('./features/calculator/style.scss');
        await import('./features/calculator/main');
      } catch (error) {
        console.error(
          'index.html, style.scss, main.js files should be provided. ',
          error,
        );
      }
    },

    '/password-generator': async () => {
      // load password-generator page
      let response = await fetch('/features/password-generator/index.html');
      let html = await response.text();
      app.innerHTML = html;
      try {
        await import('./features/password-generator/style.scss');
        await import('./features/password-generator/main');
      } catch (error) {
        console.error(
          'index.html, style.scss, main.js files should be provided. ',
          error,
        );
      }
    },
    '/currency-converter': async () => {
      // load currency-converter page
      let response = await fetch('/features/currency-converter/index.html');
      let html = await response.text();
      app.innerHTML = html;
      try {
        await import('./features/currency-converter/style.scss');
        await import('./features/currency-converter/main');
      } catch (error) {
        console.error(
          'index.html, style.scss, main.js files should be provided. ',
          error,
        );
      }
    },
    '/unit-converter': async () => {
      // load unit-converter page
      let response = await fetch('/features/unit-converter/index.html');
      let html = await response.text();
      app.innerHTML = html;
      try {
        await import('./features/unit-converter/style.scss');
        await import('./features/unit-converter/main');
      } catch (error) {
        console.error(
          'index.html, style.scss, main.js files should be provided. ',
          error,
        );
      }
    },
  };

  // Event Listeners
  // handle navigation
  navigation.addEventListener('click', handleNavigation);

  // respond to current URL state
  window.addEventListener('popstate', handleCurrentUrlState);

  // function handlers
  function handleNavigation(event) {
    event.preventDefault();
    // get the clicked link's URL
    let clickedUrl = event.target.getAttribute('href');

    // push the clicked URL to the browser history
    history.pushState({ clickedUrl }, '', clickedUrl);

    // invoke the route handler for the clicked URL on matching route
    Object.keys(routes).includes(clickedUrl) && routes[clickedUrl]();
  }

  function handleCurrentUrlState() {
    // get the current URL
    const currentUrl = window.location.pathname;
    // invoke the route handler for the current state URL
    // routes[currentUrl]();
    routes[currentUrl]();
  }
});
