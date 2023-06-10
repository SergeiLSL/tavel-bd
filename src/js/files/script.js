// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


/* ++++++++++++++++++++++++++++++ */
// ? БУРГЕР
window.addEventListener('load', windowLoad);

function windowLoad() {
   document.addEventListener('click', documentActions);
}


function documentActions(e) {
   const targetElement = e.target;

   if (targetElement.closest(".icon-menu")) {
      document.documentElement.classList.toggle("menu-open");
   }

   if (targetElement.closest("[data-goto]")) {
      document.documentElement.classList.contains("menu-open")
         ? document.documentElement.classList.remove("menu-open")
         : null;

      const goTo = targetElement.closest("[data-goto]").dataset.goto;
      const goToElement = document.querySelector(goTo);
      const headerHeight = document.querySelector(".header").offsetHeight;

      if (goToElement) {
         window.scrollTo({
            top: goToElement.offsetTop - (headerHeight + 15),
            behavior: "smooth",
         });
      }
      e.preventDefault();
   }
}

//=======================================================================================================================================================
// ? Анимация при скролле Есть пример в папке D/PROJECT  Code Only/Практика
// ? Анимация time 13:29
// https://www.youtube.com/watch?v=kupwmF72Plo&t=7s

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) { // ищем все объекты
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]; // получаем переменную для каждого элемента массива
			const animItemHeight = animItem.offsetHeight; // получаем высоту объекта 
			const animItemOffset = offset(animItem).top; // получаем позицию объекта относительно верха через фуекцию offset(el)
			const animStart = 4; // коэф-т момента старта анимации

			let animItemPoint = window.innerHeight - animItemHeight / animStart; // от высоты окна браузера - отнимаем высоту объекта поделенную на animStart
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
            // чтобы не было анимации приобратном скролле
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) { // получаем позицию объекта относительно верха
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 200);
}

/* ++++++++++++++++++++++++++++++ */
new Swiper('.slider-image-rows', {
   // просмотр по кругу
   // loop: true,
   speed: 800,
   // лапка
   grabCursor: true,
   // количество слайдов для показа
   slidesPerView: 3,
   // grid: {
   //    rows: 2,
   // },
   spaceBetween: 30,
   // количество пролистываемых слайдов
   slidesPerGroup: 1,
   // астивный слайд по центру
   // centeredSlides: true,
   // управление с клавиатуры
   keyboard: {
      // включить \ выключить клавиатуру
      enabled: true,
      // включить \ выключить когда слайдер виден
      onlyInViewport: true,
   },
   pagination: {
      // позволяет обращаться непосредственно к буллету
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   // Брейкпоинты
   breakpoints: {
      320: {
         slidesPerView: 1,
         spaceBetween: 30,
         grid: {
            rows: 1,
         },
      },
      480: {
         slidesPerView: 1,
         // spaceBetween: 30,
         grid: {
            rows: 1,
         },
      },
      600: {
         slidesPerView: 2,
         // spaceBetween: 30,
         grid: {
            rows: 1,
         },
      },      
      992: {
         slidesPerView: 3,
         grid: {
            rows: 2,
         },
      },
   },
   navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
   },
   // type: 'fraction',
   // renerFraction: function (currentClass, totalClass) {
   //    return 'Фото <span class="' + currentClass + '"></span>' +
   //    ' из ' +
   //    '<span class="' + totalClass + '"></span>';
   // },
});