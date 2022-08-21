// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("earth--active");
  toggleMenuSmItemTwo.classList.remove("earth--active");
  toggleMenuSmItemThree.classList.remove("earth--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("earth--active");
  toggleMenuSmItemTwo.classList.add("earth--active");
  toggleMenuSmItemThree.classList.remove("earth--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("earth--active");
  toggleMenuSmItemTwo.classList.remove("earth--active");
  toggleMenuSmItemThree.classList.add("earth--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-earth--active");
  toggleMenuItemTwo.classList.remove("toggle-earth--active");
  toggleMenuItemThree.classList.remove("toggle-earth--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-earth--active");
  toggleMenuItemTwo.classList.add("toggle-earth--active");
  toggleMenuItemThree.classList.remove("toggle-earth--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-earth--active");
  toggleMenuItemTwo.classList.remove("toggle-earth--active");
  toggleMenuItemThree.classList.add("toggle-earth--active");
});