/* eslint-disable no-useless-concat */
 const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
  }
  return res.json();
};
export const getSearchId = async () => {
  const fullUrl = `https://front-test.beta.aviasales.ru/search`;
  return getResource(fullUrl)
};

export const getData = async (searchId) => {
  const fullUrl = `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`;
  
  return getResource(fullUrl)
};
