import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import Restaurants from '../views/pages/restaurants';

const routes = {
  '/': Restaurants,
  '/restaurants': Restaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
