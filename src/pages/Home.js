import getData from '../utils/getData';
import getHash from '../utils/getHash';
import cardTemplate from '../utils/card';

const Home = async () => {
  const hash = await getHash();
  const { results } = await getData(hash);
  
  return `
  <div class="card__grid">
    ${await cardTemplate(results)}
  </div> 
  `;
}

export default Home;