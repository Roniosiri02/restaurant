import RestaurantsSource from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="content">
    <h1 class="content__heading">favorite Restaurant</h1>
    <div id="restaurants" class="restaurants">
    </div>
      `;
  },

  async afterRender() {
    const restaurant = await RestaurantsSource.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurants) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Favorite;
