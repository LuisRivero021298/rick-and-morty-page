import getData from '../utils/getData'

const Paginations = async () => {
    const {info} = await getData();

    let links = []
    for (let i = 1; i <= info.pages; i++){
        links.push(i)
    }

    let a = 0;
    return `
      <div>
          ${links.map(() => 
              `<a class="pagination__item" href="#/?page=${++a}/">${a}</a>`
          ).join('')}
      </div>
    `;
}

export default Paginations