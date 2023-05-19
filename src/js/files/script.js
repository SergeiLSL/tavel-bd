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