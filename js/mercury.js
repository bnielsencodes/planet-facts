// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("mercury--active");
  toggleMenuSmItemTwo.classList.remove("mercury--active");
  toggleMenuSmItemThree.classList.remove("mercury--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("mercury--active");
  toggleMenuSmItemTwo.classList.add("mercury--active");
  toggleMenuSmItemThree.classList.remove("mercury--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("mercury--active");
  toggleMenuSmItemTwo.classList.remove("mercury--active");
  toggleMenuSmItemThree.classList.add("mercury--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-mercury--active");
  toggleMenuItemTwo.classList.remove("toggle-mercury--active");
  toggleMenuItemThree.classList.remove("toggle-mercury--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-mercury--active");
  toggleMenuItemTwo.classList.add("toggle-mercury--active");
  toggleMenuItemThree.classList.remove("toggle-mercury--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-mercury--active");
  toggleMenuItemTwo.classList.remove("toggle-mercury--active");
  toggleMenuItemThree.classList.add("toggle-mercury--active");
});