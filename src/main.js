// selectors
const root = document.documentElement;
const navigation = document.getElementById('nav');
// Wait  HTML document to be completely parsed
document.addEventListener('DOMContentLoaded', () => {
  const routes = {
    '/': async () => {
      // load landing page
      let response = await fetch('./index.html');
      let html = await response.text();
      root.innerHTML = html;
    },
    '/calculator': async () => {
      // load calculator page
      let response = await fetch('/features/calculator/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/calculator/style.scss');
      await import('./features/calculator/main');
    },

    '/password-generator': async () => {
      // load password-generator page
      let response = await fetch('/features/password-generator/index.html');
      let html = await response.text();
      root.innerHTML = html;
      try {
        await import('./features/password-generator/style.scss');
        await import('./features/password-generator/main');
      } catch (error) {
        console.error(
          'Error happened during fetching a password-generator html: ',
          error,
        );
      }
    },
    '/currency-converter': async () => {
      // load currency-converter page
      let response = await fetch('/features/currency-converter/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/currency-converter/style.scss');
      await import('./features/currency-converter/main');
    },
    '/unit-converter': async () => {
      // load unit-converter page
      let response = await fetch('/features/unit-converter/index.html');
      let html = await response.text();
      root.innerHTML = html;
      await import('./features/unit-converter/style.scss');
      await import('./features/unit-converter/main');
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
    const clickedUrl = event.target.getAttribute('href');
    console.log('clickedUrl: ', clickedUrl);

    // push the clicked URL to the browser history
    history.pushState({ clickedUrl }, '', clickedUrl);
    console.log('window.history: ', history);

    // check if the routes object has a property with the key equal to the clickedUrl value
    if (routes.hasOwnProperty(clickedUrl)) {
      // invoke the route handler for the clicked URL
      routes[clickedUrl]();
      return;
    }
    // handle the case where there is no matching route
    console.error('Page Not Found');
  }

  function handleCurrentUrlState() {
    // get the current URL
    const currentUrl = window.location.pathname;
    console.log('currentUrl: ', currentUrl);
    // invoke the route handler for the current state URL
    // routes[currentUrl]();
    routes[currentUrl]();
  }
});
