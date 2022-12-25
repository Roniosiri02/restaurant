import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="post__item">
    <p tabindex="0"><span class="city">${restaurant.city}</span></p>
      <img class="post-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" tabindex="0">
    <div class="post-item__content">
        <div class="post_item_rating">
            <p tabindex="0">⭐️<span tabindex="0" class="post_item_rating_value">${restaurant.rating || '-'}</span></p>
          </div>
      <h1 class="post-item__title" tabindex="0"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h1>
      <div class="post-item__description">
      <p>${restaurant.description || '-'}</p>
    </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant-detail">
    <h2  tabindex="0" class="restaurant__name">${restaurant.name}</h2>
    <img class="lazyload restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}" alt="${restaurant.name}" >
    <div class="restaurant__info">
      <h4 tabindex="0">Categories</h4>
      <p>${restaurant.categories.map((categories) => `${categories.name}`)}</p>
      <h4>Address</h4>
      <p>${restaurant.address}, ${restaurant.city}</p>
    </div>
    <div class="restaurant__overview">
      <h3 tabindex="0">Overview</h3>
      <p>${restaurant.description}</p>
    </div>
    <div class="restaurant__menu">
      <h3 tabindex="0">Foods</h3>
      <p>${restaurant.menus.foods.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
      <h3 tabindex="0">Drinks</h3>
      <p>${restaurant.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
  </div>
  <div class="restaurant__review">
  ${restaurant.customerReviews.reduce((show, value) => show.concat(`<br>
  <p tabindex="0">${value.name}</p>
  <p tabindex="0">${value.review}</p>
  <p tabindex="0">${value.date}</p>`), '<h3>Customer Reviews:</h3>')}
  </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
