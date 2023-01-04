export default async function fetchUrl(url, params = {}) {
  console.log('url: ', url);
  const queryString = buildQueryParams(params);
  console.log('queryString: ', queryString);

  // config for get req
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(`${url}?${queryString}`, config);
    const jasoned = await response.json();
    return jasoned;
  } catch (error) {
    console.error('Error occured during fetching data: ', error);
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
