import Swiper from './swiper/swiper-bundle.min.mjs';

(() => {
    const MOBILE_BREAKPOINT = 1440;
    const CAROUSEL_SELECTOR = 'section#author-projects-container-mobile > div.author-projects-row';

    window.addEventListener('DOMContentLoaded', () => {
      initCarousel();
    });

    function initCarousel() {
        checkScreenWidth();
        initResizeEvent();
    }
    
    function checkScreenWidth() {
        if (screen.width <= MOBILE_BREAKPOINT) {
            const items = document.querySelectorAll(CAROUSEL_SELECTOR);
    
            if (items) {
                items.forEach(item => {
                    new Swiper(item, {
                        direction: 'horizontal',
                        loop: true,
                        slidesPerView: 'auto',
                        spaceBetween: 10
                    });
                });
            }
        }
    }
    
    function initResizeEvent() {
        window.addEventListener('resize', () => {
            checkScreenWidth();
        });
    }    
})();

