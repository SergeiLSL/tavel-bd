/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
// import Swiper, { Navigation, Pagination } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
// import "../../scss/base/swiper.scss";
// // Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// // Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
// function initSliders() {
   // Список слайдерів
   // Перевіряємо, чи є слайдер на сторінці
   // if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
   //    // Створюємо слайдер
   //    new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
   //       // Підключаємо модулі слайдера
   //       // для конкретного випадку
   //       modules: [Navigation],
   //       modules: [Pagination],
   //       observer: true,
   //       observeParents: true,
   //       slidesPerView: 3,
   //       spaceBetween: 34,
   //       autoHeight: true,
   //       speed: 800,

   //       //touchRatio: 0,
   //       //simulateTouch: false,
   //       loop: true,
   //       //preloadImages: false,
   //       //lazy: true,

   //       /*
   //       // Ефекти
   //       effect: 'fade',
   //       autoplay: {
   //          delay: 3000,
   //          disableOnInteraction: false,
   //       },
   //       */

   //       // Пагінація
   //       pagination: {
   //          el: '.swiper-pagination',
   //          clickable: true,
   //          renderBullet: function (index, className) {
   //             return '<span class="' + className + '">' + (index + 1) + "</span>"
   //          },
   //       },


   //       // Скроллбар
   //       /*
   //       scrollbar: {
   //          el: '.swiper-scrollbar',
   //          draggable: true,
   //       },
   //       */

   //       // Кнопки "вліво/вправо"
   //       navigation: {
   //          prevEl: '.swiper-button-prev',
   //          nextEl: '.swiper-button-next',
   //       },
   //       /*
   //       // Брейкпоінти
   //       breakpoints: {
   //          640: {
   //             slidesPerView: 1,
   //             spaceBetween: 0,
   //             autoHeight: true,
   //          },
   //          768: {
   //             slidesPerView: 2,
   //             spaceBetween: 20,
   //          },
   //          992: {
   //             slidesPerView: 3,
   //             spaceBetween: 20,
   //          },
   //          1024: {
   //             slidesPerView: 4,
   //             spaceBetween: 30,
   //          },
   //       },
   //       */
   //       // Події
   //       on: {

   //       }
   //    });
   // }
// }



// window.addEventListener("load", function (e) {
//    // Запуск ініціалізації слайдерів
//    initSliders();
//    // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
//    //initSlidersScroll();
// });