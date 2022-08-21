// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("saturn--active");
  toggleMenuSmItemTwo.classList.remove("saturn--active");
  toggleMenuSmItemThree.classList.remove("saturn--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("saturn--active");
  toggleMenuSmItemTwo.classList.add("saturn--active");
  toggleMenuSmItemThree.classList.remove("saturn--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("saturn--active");
  toggleMenuSmItemTwo.classList.remove("saturn--active");
  toggleMenuSmItemThree.classList.add("saturn--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-saturn--active");
  toggleMenuItemTwo.classList.remove("toggle-saturn--active");
  toggleMenuItemThree.classList.remove("toggle-saturn--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-saturn--active");
  toggleMenuItemTwo.classList.add("toggle-saturn--active");
  toggleMenuItemThree.classList.remove("toggle-saturn--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-saturn--active");
  toggleMenuItemTwo.classList.remove("toggle-saturn--active");
  toggleMenuItemThree.classList.add("toggle-saturn--active");
});