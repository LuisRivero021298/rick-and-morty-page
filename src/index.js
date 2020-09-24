import fetchData from "./utils/fetchData.js";
import cardTemplate from "./utils/card.js";
const url = 'https://rickandmortyapi.com/api/character/';
const cardGrid = document.getElementById('card-grid');

const getData = async () => {
  try {
    const { results } = await fetchData(url);

    results.map( character => {
      const {image, origin, name, species, status} = character;
      const card = cardTemplate(image, origin, name, species, status);
      cardGrid.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
};
getData();