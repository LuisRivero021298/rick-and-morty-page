import router from './routes/index';
const cardGrid = document.getElementById('content');

window.addEventListener('load', router);
window.addEventListener('hashchange', router);