/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
import FavoriteRestaurantSearchPresenter
  from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching restaurants', () => {
  beforeEach(() => {
    document.body.innerHTML = `
        <div id="restaurants-search-container">
            <input id="query" type="text">
            <div class="restaurants-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
        `;
  });

  it('should be able to capture the query typed by the user', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({
      FavoriteRestaurants: FavoriteRestaurantIdb,
    });

    const queryElement = document.getElementById('query');
    queryElement.value = 'restaurant a';
    queryElement.dispatchEvent(new Event('change'));

    expect(presenter.latestQuery).toEqual('restaurant a');
  });

  it('should ask the model to search for liked restauarant', () => {
    spyOn(FavoriteRestaurantIdb, 'searchRestaurants');
    const presenter = new FavoriteRestaurantSearchPresenter({ FavoriteRestaurants: FavoriteRestaurantIdb });

    const queryElement = document.getElementById('query');
    queryElement.value = 'restaurant a';
    queryElement.dispatchEvent(new Event('change'));

    expect(FavoriteRestaurantIdb.searchRestaurants)
      .toHaveBeenCalledWith('restaurant a');
  });
});
