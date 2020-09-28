import getData from '../utils/getData';
import getHash from '../utils/getHash';

const Character = async () => {
  const id = getHash();
  const { origin, location, ...character } = await getData(id);
  
  return `
    <div class="character__inner">
      <article class="character__card">
        <img src="${character.image}" alt="${character.name}" />
        <h2>${character.name}</h2>
      </article>
      <article>
        <p>Episodes: <span>${character.episode.length}</span></p>
        <p>Status: <span>${character.status}</span></p>
        <p>Species: <span>${character.species}</span></p>
        <p>Gender: <span>${character.gender}</span></p>
        <p>Origin: <span>${origin.name}</span></p>
        <p>Last location: <span>${location.name}</span></p>
      </article>
    </div>
  `;
}


export default Character;