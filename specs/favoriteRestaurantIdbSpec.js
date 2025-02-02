import itActsAsFavoriteRestaurantModel from "./contract/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favrestaurant-idb";

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (restaurant) => {
        await FavoriteRestaurantIdb.deleteRestaurant(restaurant.id);
        });
    });
    
    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});
