import getData from '../utils/getData';
import getHash from '../utils/getHash';
import cardTemplate from '../utils/card';
let charateresList = [];

const Home = async () => {
  const hash = await getHash();
  const { results } = await getData(hash);
  
  return `
  <div class="card__grid">
    ${await cardTemplate(results)}
  </div> 
  `;
}

/*for (let i = 0; i < paginationItems.length; i ++){
  paginationItems[i].addEventListener('click', function () {
    const page = this.attributes[2].value;
    
    if(charateresList.length !== 0) {
      cardGrid.innerHTML = "";
      charateresList = [];
    }
    Home(page);
  });
}*/

export default Home;