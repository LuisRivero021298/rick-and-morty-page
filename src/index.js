/* whit xmlhttp */
/*const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = 'https://rickandmortyapi.com/api/character/';

function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = event => {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText));
      } else {
        const err = new Error(`Error ${urlApi}`);
        return callback(err);
      }
    }
  }
  xhttp.send();
}

fetchData(url, (err1 = null, data1 = null) => {
  if(err1) return console.error(err1);
  fetchData(url + data1.results[0].id, (err2, data2) => {
    
    if(err2) return console.error(err2);
    fetchData(data2.origin.url, (err3, data3) => {
      
      if(err3) return console.error(err3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })  
  })
});*/

const fetchData = require("./utilities/fetchData");
const url = 'https://rickandmortyapi.com/api/character/';

/*
fetchData(url)
  .then(({info, results}) => {
    let [data] = results;
    console.log(info.count);
    return fetchData(`${url}${data.id}`);
  })
  .then(({name, origin}) => {
    console.log(name)
    return fetchData(origin.url);
  })
  .then(({dimension}) => {
    console.log(dimension);
  })
  .catch(err => console.error(err));
*/

const getData = async () => {
  try {
    const { info, results } = await fetchData(url);
    const { count } = info;
    const [ data ] = results;
    const { name, id } = data;
    const { origin } = await fetchData(`${url}${id}`);
    const { dimension } = await fetchData(origin.url);

    console.log(count);
    console.log(name);
    console.log(dimension);
  } catch (error) {
    console.error(error);
  }
};
getData();