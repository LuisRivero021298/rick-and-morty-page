const url = 'https://rickandmortyapi.com/api/character/';

const getData = async (page = 0, id) => {
  try {
    page === 0 ? page = '' : page = `?page=${page}`;
    const apiUrl = id ? `${url}${id}` : `${url}${page}`;

    const resp = await fetch(apiUrl);
    const data = await resp.json();
    return data;

  } catch (error) {
    console.error(error);
  }
};

export default getData;