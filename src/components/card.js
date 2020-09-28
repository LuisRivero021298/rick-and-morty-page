const cardTemplate = (characters) => {
  if (status === "unknown") status = "No registered";
  if (origin.name === "unknown") origin.name = "No registered";

  return `${characters
    .map(
      (character) =>
        `<article class="card" >
      <a href="#/${character.id}">
        <div class="card__top">
          <img class="card__image" src="${character.image}" alt="card-image">
        </div>
        <div class="card__bottom spaced">
          <div>
            <h3 class="card__title">${character.name}</h3>
          </div>
          <div>
            <span class="card__text">${character.species}</span>
            <span class="card__label--${character.status.toLowerCase()}">${
          character.status
        }</span>
          </div>
        </div>
      </a>
    </article>`
    )
    .join("")}
  `;
};
export default cardTemplate;

