import Swiper from './swiper/swiper-bundle.min.mjs';

(() => {
    const LAPTOP_BREAKPOINT = 1440;
    const MOBILE_BREAKPOINT = 440;
    const CAROUSEL_SELECTOR = 'section#author-projects-container-mobile > div.author-projects-row';

    window.addEventListener('DOMContentLoaded', () => {
      initialize();
    });

    function initialize() {
        checkForCarousels();
        initResizeEvent();
    }
    
    function checkForCarousels() {
        if (screen.width <= LAPTOP_BREAKPOINT) {
            const carousels = document.querySelectorAll(CAROUSEL_SELECTOR);
    
            if (carousels) {
                carousels.forEach(carousel => {
                    const slides = carousel.querySelectorAll('.swiper-slide');

                    if (slides) {
                      const itemsPerView = getItemsPerView();
                      const carouselWidth = carousel.clientWidth;
                      const maxSlideWitdh = carouselWidth / itemsPerView;

                      slides.forEach(slide => {
                          slide.style.maxWidth = `${maxSlideWitdh}px`;
                          slide.style.flexShrink = '0';
                          slide.style.width = 'auto';
                      });

                      new Swiper(carousel, {
                          direction: 'horizontal',
                          loop: true,
                          slidesPerView: 'auto',
                          spaceBetween: 5
                      });
                    }
                });
            }
        }
    }
    
    function initResizeEvent() {
        window.addEventListener('resize', () => {
            checkForCarousels();
        });
    }
    
    function getItemsPerView() {
      const screenWidth = screen.width;

      return (screenWidth <= LAPTOP_BREAKPOINT && screenWidth > MOBILE_BREAKPOINT)
        ? 4.5
        : 2.5;
    }
})();

