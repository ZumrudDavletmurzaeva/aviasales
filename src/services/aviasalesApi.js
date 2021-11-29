/* eslint-disable no-useless-concat */

 const getResource = async (path) => {
  const apiBase= 'https://front-test.beta.aviasales.ru';
  const res = await fetch(`${apiBase}${path}`);

  if (!res.ok) {
    throw new Error(`${res}`);
  }
  return res.json();
};


export const getSearchId = async () => {
  return getResource(`/search`)
};


export const getData = async (searchId) => {
  return getResource(`/tickets?searchId=${searchId}`)
};
