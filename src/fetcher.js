export default async function fetchUrl(url, params = {}) {
  const queryString = buildQueryParams(params);

  // config for get req
  const config = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };

  try {
    const response = await fetch(`${url}?${queryString}`, config);
    const jasoned = await response.json();
    return jasoned;
  } catch (error) {}
}

function buildQueryParams(obj) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(obj)) {
    searchParams.set(key, value);
  }

  // return query string
  return searchParams.toString();
}
