// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("uranus--active");
  toggleMenuSmItemTwo.classList.remove("uranus--active");
  toggleMenuSmItemThree.classList.remove("uranus--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("uranus--active");
  toggleMenuSmItemTwo.classList.add("uranus--active");
  toggleMenuSmItemThree.classList.remove("uranus--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("uranus--active");
  toggleMenuSmItemTwo.classList.remove("uranus--active");
  toggleMenuSmItemThree.classList.add("uranus--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-uranus--active");
  toggleMenuItemTwo.classList.remove("toggle-uranus--active");
  toggleMenuItemThree.classList.remove("toggle-uranus--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-uranus--active");
  toggleMenuItemTwo.classList.add("toggle-uranus--active");
  toggleMenuItemThree.classList.remove("toggle-uranus--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-uranus--active");
  toggleMenuItemTwo.classList.remove("toggle-uranus--active");
  toggleMenuItemThree.classList.add("toggle-uranus--active");
});