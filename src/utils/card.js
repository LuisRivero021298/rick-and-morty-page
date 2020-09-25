const cardTemplate = (image, origin, name, species, status, id) => {
  const card = document.createElement('article');
  card.classList.add('card');
  const newId = setId(id, name);
  card.setAttribute('id', newId);

  if (status === 'unknown') status = 'No registered';
  if (origin.name === 'unknown') origin.name = 'No registered';

  card.innerHTML = `
  <div class="card__top">
    <img class="card__image" src="${image}" alt="card-image">
  </div>
  <div class="card__bottom spaced">
    <div>
      <h2 class="card__title">${name}</h2>
      <span class="card__label">${origin.name}</span>
    </div>
    <div>
      <span class="card__text">${species}</span>
      <span class="card__label--${status.toLowerCase()}">${status}</span>
    </div>
  </div>
  `;

  return card;
}

const setId = (id, name) => {
  let nameResult = name.split(' ');

  return `${id}-${nameResult[0]}`;
}

export default cardTemplate;