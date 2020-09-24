const cardTemplate = ({image, origin, name, species, status}) => {
  const card = document.createElement('article');
  card.classList.add('card')

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