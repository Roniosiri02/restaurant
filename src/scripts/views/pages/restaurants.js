import RestaurantsSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
    <div class="content">
    <h1 class="content__heading">Explore Restaurant</h1>
    <div id="restaurants" class="restaurants">
    </div>
  </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantsSource.restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Restaurants;
