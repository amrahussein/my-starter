const app = document.getElementById('app-container');

const loadedPages = {};

export async function loadPage(path, route) {
  if (loadedPages[route]) {
    clearRoutedPages();

    app.appendChild(loadedPages[route]);
    return;
  }
  // Load page i.e. requested html page
  let response = await fetch(path);

  // parse the html
  let html = await response.text();

  clearRoutedPages();

  // create `div` outlet for every page
  const outlet = document.createElement('div');
  outlet.innerHTML = html;

  // append created outlet to app container section
  app.appendChild(outlet);
  loadedPages[route] = outlet;

  try {
    if (route === '/') {
      // load main page related files
      loadLandingPage();
      return;
    }

    // Else load typical feature related files
    await import(`/features${route}/style.scss`);
    await import(`/features${route}/main`);
  } catch (error) {
    console.log(
      `unexpected error has occurred while loading page assets::: ${error}`,
    );
  }
}

async function loadLandingPage() {
  await Promise.all([
    import('/landing/landing-weather'),
    import('/landing-todos'),
    import('/landing'), // mobile btn toggler js file
  ]);
}

function clearRoutedPages() {
  for (const pageOutlet in loadedPages) {
    if (loadedPages.hasOwnProperty(pageOutlet)) {
      const outlet = loadedPages[pageOutlet];
      outlet.remove();
    }
  }
}
