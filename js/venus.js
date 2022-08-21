// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("venus--active");
  toggleMenuSmItemTwo.classList.remove("venus--active");
  toggleMenuSmItemThree.classList.remove("venus--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("venus--active");
  toggleMenuSmItemTwo.classList.add("venus--active");
  toggleMenuSmItemThree.classList.remove("venus--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("venus--active");
  toggleMenuSmItemTwo.classList.remove("venus--active");
  toggleMenuSmItemThree.classList.add("venus--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-venus--active");
  toggleMenuItemTwo.classList.remove("toggle-venus--active");
  toggleMenuItemThree.classList.remove("toggle-venus--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-venus--active");
  toggleMenuItemTwo.classList.add("toggle-venus--active");
  toggleMenuItemThree.classList.remove("toggle-venus--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-venus--active");
  toggleMenuItemTwo.classList.remove("toggle-venus--active");
  toggleMenuItemThree.classList.add("toggle-venus--active");
});