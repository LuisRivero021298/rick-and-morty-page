import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Home from '../pages/Home';
import Paginations from '../components/Paginations';

const routes = {
  '/' : Home,
  '/page' : Home,
}

const router = async () => {
  //const header = null || document.getElementById('header');
  const content = null || document.getElementById('content');
  const pagination = null || document.getElementById('pagination');

  //header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.appendChild(await render()); 
  pagination.innerHTML = await Paginations();
}

export default router;