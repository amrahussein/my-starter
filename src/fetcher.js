export default async function fetchUrl(url, params = {}, retryTimes = 2) {
  // cancel the fetch request in 1 sec
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => controller.abort(), 1000);

  // build the query string
  const queryString = buildQueryParams(params);

  // config for get req
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    signal,
  };

  try {
    const response = await fetch(`${url}?${queryString}`, config);
    const jasoned = await response.json();

    return jasoned;
  } catch (error) {
    if (error instanceof SyntaxError) console.error('Unexpected token in JSON');
    // else print the unexpected error
    console.log(`Error occuring during fetching the url: ${error.message} `);

    if (retryTimes > 0) {
      console.log(`Retrying fetching: ${url}
       ${retryTimes} attempts remaining`);

      return await fetchUrl(url, params, retryTimes - 1);
    }
  }
}

function buildQueryParams(obj) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    searchParams.set(key, value);
  }

  // return query string
  return searchParams.toString();
}
