const url = 'https://rickandmortyapi.com/api/character/';

const getData = async (page) => {
  try {
    const apiUrl = page ? `${url}${page}` : url;
    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
};

export default getData;