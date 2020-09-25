import fetchData from "./utils/fetchData.js";
import cardTemplate from "./utils/card.js";
const url = 'https://rickandmortyapi.com/api/character/';
const cardGrid = document.getElementById('card-grid');
const paginationItems = document.getElementsByClassName('pagination__item');
let charateresList = [];

const getData = async (page = 0) => {
  try {
    page === 0 ?
      page = '' :
      page = `?page=${page}`;

    const { results } = await fetchData(url+page);
    charateresList = results;

    addCharacter();
    
  } catch (error) {
    console.error(error);
  }
};
getData();

const addCharacter = () => {
  charateresList.map( character => {
    const {image, origin, name, species, status, id} = character;
    const card = cardTemplate(image, origin, name, species, status, id);
    cardGrid.appendChild(card);
  });
}

for (let i = 0; i < paginationItems.length; i ++){
  paginationItems[i].addEventListener('click', function () {
    const page = this.attributes[2].value;
    
    if(charateresList.length !== 0) {
      cardGrid.innerHTML = "";
      charateresList = [];
    }
    getData(page);
  });
}