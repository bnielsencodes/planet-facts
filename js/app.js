// SMALL SCREEN VARIABLES
const toggleMenuSmItemOne = document.querySelector(".toggle-menu-sm__item--one");
const toggleMenuSmItemTwo = document.querySelector(".toggle-menu-sm__item--two");
const toggleMenuSmItemThree = document.querySelector(".toggle-menu-sm__item--three");

// MEDIUM AND LARGE SCREEN VARIABLES
const toggleMenuItemOne = document.querySelector(".toggle-menu__item--one");
const toggleMenuItemTwo = document.querySelector(".toggle-menu__item--two");
const toggleMenuItemThree = document.querySelector(".toggle-menu__item--three");

// PLANET IMAGE VARIABLES
const planetPrimary = document.querySelector(".planet__img--primary");
const planetSecondary = document.querySelector(".planet__img--secondary");
const planetTernary = document.querySelector(".planet__ternary");

// INFO TEXT VARIABLES
const infoTextPrimary = document.querySelector(".info__text--primary");
const infoTextSecondary = document.querySelector(".info__text--secondary");
const infoTextTernary = document.querySelector(".info__text--ternary");

// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  planetPrimary.classList.remove("hidden");
  planetSecondary.classList.add("hidden");
  planetTernary.classList.add("hidden");
  infoTextPrimary.classList.remove("hidden");
  infoTextSecondary.classList.add("hidden");
  infoTextTernary.classList.add("hidden");
  toggleMenuSmItemOne.classList.add("toggle-menu-sm__item--active");
  toggleMenuSmItemTwo.classList.remove("toggle-menu-sm__item--active");
  toggleMenuSmItemThree.classList.remove("toggle-menu-sm__item--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  planetPrimary.classList.add("hidden");
  planetSecondary.classList.remove("hidden");
  planetTernary.classList.add("hidden");
  infoTextPrimary.classList.add("hidden");
  infoTextSecondary.classList.remove("hidden");
  infoTextTernary.classList.add("hidden");
  toggleMenuSmItemOne.classList.remove("toggle-menu-sm__item--active");
  toggleMenuSmItemTwo.classList.add("toggle-menu-sm__item--active");
  toggleMenuSmItemThree.classList.remove("toggle-menu-sm__item--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  planetPrimary.classList.remove("hidden");
  planetSecondary.classList.add("hidden");
  planetTernary.classList.remove("hidden");
  infoTextPrimary.classList.add("hidden");
  infoTextSecondary.classList.add("hidden");
  infoTextTernary.classList.remove("hidden");
  toggleMenuSmItemOne.classList.remove("toggle-menu-sm__item--active");
  toggleMenuSmItemTwo.classList.remove("toggle-menu-sm__item--active");
  toggleMenuSmItemThree.classList.add("toggle-menu-sm__item--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  planetPrimary.classList.remove("hidden");
  planetSecondary.classList.add("hidden");
  planetTernary.classList.add("hidden");
  infoTextPrimary.classList.remove("hidden");
  infoTextSecondary.classList.add("hidden");
  infoTextTernary.classList.add("hidden");
  toggleMenuItemOne.classList.add("toggle-menu__item--active");
  toggleMenuItemTwo.classList.remove("toggle-menu__item--active");
  toggleMenuItemThree.classList.remove("toggle-menu__item--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  planetPrimary.classList.add("hidden");
  planetSecondary.classList.remove("hidden");
  planetTernary.classList.add("hidden");
  infoTextPrimary.classList.add("hidden");
  infoTextSecondary.classList.remove("hidden");
  infoTextTernary.classList.add("hidden");
  toggleMenuItemOne.classList.remove("toggle-menu__item--active");
  toggleMenuItemTwo.classList.add("toggle-menu__item--active");
  toggleMenuItemThree.classList.remove("toggle-menu__item--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  planetPrimary.classList.remove("hidden");
  planetSecondary.classList.add("hidden");
  planetTernary.classList.remove("hidden");
  infoTextPrimary.classList.add("hidden");
  infoTextSecondary.classList.add("hidden");
  infoTextTernary.classList.remove("hidden");
  toggleMenuItemOne.classList.remove("toggle-menu__item--active");
  toggleMenuItemTwo.classList.remove("toggle-menu__item--active");
  toggleMenuItemThree.classList.add("toggle-menu__item--active");
});

// .NAV-OVERLAY VARIABLES
const hamburgerMenu = document.querySelector(".fa-bars");
const navOverlay = document.querySelector(".nav-overlay");

// SHOW/HIDE NAV OVERLAY ON HAMBURGER MENU CLICK EVENT
hamburgerMenu.addEventListener("click", () => {
  navOverlay.classList.toggle("hidden");
  hamburgerMenu.classList.toggle("fa-bars--active");
});