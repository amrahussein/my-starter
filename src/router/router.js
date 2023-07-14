import { loadPage } from '../page-loader/pageLoader';

// SELECTORS
const mainPage = document.getElementById('mainPage');
const navigation = document.getElementById('nav');
const navLinks = navigation.querySelectorAll('.nav-item');

export function initRouter(loadLanding = true) {
  // Event Listeners
  // handle router navigation
  mainPage.addEventListener('click', handleRouteNavigation);
  navigation.addEventListener('click', handleRouteNavigation);

  function handleRouteNavigation(event) {
    event.preventDefault();
    const urlPath = getClickedUrlPath(event);

    navigateToPage(urlPath);
  }

  function getClickedUrlPath(event) {
    // get the clicked link's URL
    let urlPath = event.target.getAttribute('href');
    if (!urlPath) {
      urlPath = event.currentTarget.getAttribute('href'); // matching `mainPage` - (my starter, site header) href selector
    }

    return urlPath;
  }

  function navigateToPage(urlPath) {
    // push the clicked URL to the browser history
    history.pushState({ urlPath }, '', urlPath);
    toggleActiveNavigationClass(urlPath);

    // invoke the route handler for the clicked URL on matching URL path
    routes[urlPath] && routes[urlPath]();
  }

  function toggleActiveNavigationClass(urlPath) {
    // remove `active` class from all navigation links
    navLinks.forEach((link) => link.classList.remove('active'));

    // get matching navigation link for the current URL
    const currentNavLink = navigation.querySelector(`a[href="${urlPath}"]`);

    // add `active` class to clicked nav list element
    currentNavLink && currentNavLink.parentElement.classList.add('active');
  }

  const routes = {
    '/': async () => {
      await loadPage('/landing/landing.html', '/');
    },
    '/calculator': async () => {
      await loadPage('/features/calculator/index.html', '/calculator');
    },
    '/password-generator': async () => {
      await loadPage(
        '/features/password-generator/index.html',
        '/password-generator',
      );
    },
    '/currency-converter': async () => {
      await loadPage(
        '/features/currency-converter/index.html',
        '/currency-converter',
      );
    },
    '/unit-converter': async () => {
      await loadPage('/features/unit-converter/index.html', '/unit-converter');
    },
  };

  // Init Landing Page on Site Load
  if (loadLanding) routes['/']();
}
