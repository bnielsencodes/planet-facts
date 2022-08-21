// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("jupiter--active");
  toggleMenuSmItemTwo.classList.remove("jupiter--active");
  toggleMenuSmItemThree.classList.remove("jupiter--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("jupiter--active");
  toggleMenuSmItemTwo.classList.add("jupiter--active");
  toggleMenuSmItemThree.classList.remove("jupiter--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("jupiter--active");
  toggleMenuSmItemTwo.classList.remove("jupiter--active");
  toggleMenuSmItemThree.classList.add("jupiter--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-jupiter--active");
  toggleMenuItemTwo.classList.remove("toggle-jupiter--active");
  toggleMenuItemThree.classList.remove("toggle-jupiter--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-jupiter--active");
  toggleMenuItemTwo.classList.add("toggle-jupiter--active");
  toggleMenuItemThree.classList.remove("toggle-jupiter--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-jupiter--active");
  toggleMenuItemTwo.classList.remove("toggle-jupiter--active");
  toggleMenuItemThree.classList.add("toggle-jupiter--active");
});