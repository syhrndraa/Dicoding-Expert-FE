import RestaurantDbSource from "../../data/restaurantdb-source";
import { createRestaurantItemTemplate } from "../templates/template-creator";
import heroElementTemplate from "../templates/hero-element";
import openingContentTemplate from "../templates/opening-content";

const RestoList = {
    async render() {
      return `
      ${heroElementTemplate}
      ${openingContentTemplate}
      <div class="latest" id="maincontent" tabindex="0">
        <h1 class="latest__label">Restaurant</h1>
        <div class="posts posts-wrapper" id="restaurant-list">  
        </div>
      </div>
      `;
    },
   
    async afterRender() {
        const restaurant = await RestaurantDbSource.restaurantList();
        const restaurantContainer = document.querySelector('#restaurant-list');
        restaurant.forEach((restaurant) => {
        restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },

  };
   
export default RestoList;
