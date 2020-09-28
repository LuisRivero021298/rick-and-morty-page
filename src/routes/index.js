import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Header from '../components/Header';
import Paginations from '../components/Paginations';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Character from '../pages/Character';


const routes = {
  '/' : Home,
  '/:pages' : Home,
  '/:id' : Character
}

const router = async () => {
  const nav = null || document.getElementById('nav__header');
  const content = null || document.getElementById('content');
  const pagination = null || document.getElementById('pagination');

  nav.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;

  content.innerHTML = await render(); 
  pagination.innerHTML = await Paginations();
}

export default router;