import getData from '../utils/getData';
import getHash from '../utils/getHash';
import cardTemplate from '../utils/card';
const paginationItems = document.getElementsByClassName('pagination__item');
let charateresList = [];

const Home = async (page) => {
  const hash = getHash();
  console.log(hash);
  const { results } = await getData(page);
  charateresList = results;
  const cardGrid = document.createElement('div');
  cardGrid.classList.add('card__grid'); 

  charateresList.map( character => {
    const {image, origin, name, species, status, id} = character;
    const card = cardTemplate(image, origin, name, species, status, id);
    cardGrid.appendChild(card);
  }).join('');

  return cardGrid;
}

for (let i = 0; i < paginationItems.length; i ++){
  paginationItems[i].addEventListener('click', function () {
    const page = this.attributes[2].value;
    
    if(charateresList.length !== 0) {
      cardGrid.innerHTML = "";
      charateresList = [];
    }
    Home(page);
  });
}

export default Home;