// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("mars--active");
  toggleMenuSmItemTwo.classList.remove("mars--active");
  toggleMenuSmItemThree.classList.remove("mars--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("mars--active");
  toggleMenuSmItemTwo.classList.add("mars--active");
  toggleMenuSmItemThree.classList.remove("mars--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("mars--active");
  toggleMenuSmItemTwo.classList.remove("mars--active");
  toggleMenuSmItemThree.classList.add("mars--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-mars--active");
  toggleMenuItemTwo.classList.remove("toggle-mars--active");
  toggleMenuItemThree.classList.remove("toggle-mars--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-mars--active");
  toggleMenuItemTwo.classList.add("toggle-mars--active");
  toggleMenuItemThree.classList.remove("toggle-mars--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-mars--active");
  toggleMenuItemTwo.classList.remove("toggle-mars--active");
  toggleMenuItemThree.classList.add("toggle-mars--active");
});