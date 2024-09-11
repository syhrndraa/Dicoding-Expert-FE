import CONFIG from "../../globals/configs";

const createRestaurantItemTemplate = (restaurant) => `
    <article tabindex="0" class="post-item">
            <img class="lazyload post-item__thumbnail" data-src="${CONFIG.BASE_IMAGE_URL}small/${restaurant.pictureId}" alt="${restaurant.name}">
        <div class="post-item__header">
            <div class="post-item__header__rating">
                <p>⭐️<span class="post-item__header__rating__score">${restaurant.rating}</span></p>
            </div>
        </div>
        <div class="post-item__content">
            <h2 class="post-item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h2>
            <div class="post-item__place">${restaurant.city}</div>
            <p class="post-item__description">${restaurant.description}</p>
        <div>
    </article>
`;

const createDetailRestaurantTemplate = (restaurant) => `
    <div class="restaurant__detail-thumbnail">
        <h2>${restaurant.name}</h2>
        <img class="lazyload restaurant__poster" data-src="${CONFIG.BASE_IMAGE_URL}medium/${restaurant.pictureId}" alt="${restaurant.name}">
    </div>
    <div class="restaurant__info">
    <h3>Information</h3>
        <div class="restaurant__basic-info" tabindex=0>
            <h4>Address</h4>
            <p>📍 ${restaurant.address}, ${restaurant.city}.</p>
            <h4>Rating</h4>
            <p>⭐️ ${restaurant.rating}</p>
            <h4>Categories</h4>
            <p>📜 ${restaurant.categories
                .map(
                    (category) => `
                    <span class="category">${category.name}</span>
                    `,
                )
                .join(', ')
            }</p>
        </div>
        <div class="restaurant__menus" tabindex=0>
            <h4>Menus</h4>
            <div class="foods">
            <h5>🍱 Foods</h5>
            <ul>${restaurant.menus.foods
                .map(
                    (food) => `
                    <li>☑ ${food.name}</li>
                    `,
                )
                .join('')
            }</ul>
            </div>
            <br>
            <div class="drinks">
            <h5>☕ Drinks</h5>
            <ul>${restaurant.menus.drinks
                .map(
                    (drink) => `
                    <li>☑ ${drink.name}</li>
                    `,
                )
                .join('')
            }</ul>
            </div>
            <br>
        </div>
    </div>
    <div class="restaurant__description" tabindex=0>
        <h3>Description</h3>
        <p>&ensp; &ensp;${restaurant.description}</p>
    </div>
    <h3 class="cs-review">Customer Reviews</h3>
    <div class="restaurant__review">
        ${restaurant.customerReviews
        .map(
            (review) => `
            <div class="detail-review-item" tabindex=0>
                <div class="review-header">
                    <p class="review-name">${review.name}</p>
                    <p class="review-date">${review.date}</p>
                </div>
                <hr>
                <div class="review-body">
                    <p>${review.review}</p>
                </div>
            </div>
            `,
        )
        .join('')}
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantItemTemplate,
    createDetailRestaurantTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
