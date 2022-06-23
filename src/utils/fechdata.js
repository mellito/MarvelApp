export const permitionApi = `?ts=1000&apikey=${process.env.REACT_APP_API_PUBLIC}&hash=${process.env.REACT_APP_API_HASH}`;

export const fetchData = async (url, pages) => {
  const response = await fetch(`${url}${permitionApi}&offset=${pages * 20} `);
  const data = await response.json();
  return data;
};

export const fetchCharacterbyId = async (url) => {
  const response = await fetch(`${url}${permitionApi}`);
  const data = await response.json();
  return data;
};
