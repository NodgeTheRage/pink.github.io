import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination])
document.addEventListener('DOMContentLoaded', () => {
    const swiperContainer = new Swiper('.reviews__list', {
        loop: false,
        direction: 'horizontal',
        speed: 1500,
        initialSlide: 0,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.reviews__arrow--right',
            prevEl: '.reviews__arrow--left'
        }
    });
    const swiperDeals = new Swiper('.swiper2', {
        loop: false,
        direction: 'horizontal',
        speed: 2500,
        initialSlide: 1,
        loopFillGroupWithBlank: false,
        pagination: {
            el: '.swiper-pagination2',
            clickable: true
        },
        slidesPerView:'auto'
    });
})