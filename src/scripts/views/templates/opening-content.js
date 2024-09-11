const openingContentTemplate = `
    <section class="content">
        <article class="headline">
            <div class="headline-wrapper">
                <div>
                    <figure class="headline__figure">
                        <picture>
                            <source media="(max-width: 599px)" srcset="images/hero-image_2-small.jpg">
                            <source media="(min-width: 600px)" srcset="images/hero-image_2-large.jpg">
                            <img class="lazyload" src="images/hero-image_2.jpg" alt="">
                        </picture>
                        <figcaption>DigiResto April 2022 Infographic, 500k Restaurants</figcaption>
                    </figure>
                </div>
                <div class="headline__content">
                    <h1 class="headline__title">Story of DigiResto</h1>
                    <p class="headline__description">
                        Welcome to DigiResto! We are located in the heart of Castro district. 
                        DigiResto is a California Cuisine - ery in the Mish - stro. "Typical suburban 
                        family breakfast." DigiResto represents a combination of cultures between California 
                        (spicy, avocados, and cilantro) and Asian influences.
                    </p>
                </div>
            </div>
        </article>
    </section>
`;

export default openingContentTemplate;
