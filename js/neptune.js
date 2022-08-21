// SMALL SCREEN OVERVIEW EVENT LISTENER
toggleMenuSmItemOne.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.add("neptune--active");
  toggleMenuSmItemTwo.classList.remove("neptune--active");
  toggleMenuSmItemThree.classList.remove("neptune--active");
});

// SMALL SCREEN STRUCTURE EVENT LISTENER
toggleMenuSmItemTwo.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("neptune--active");
  toggleMenuSmItemTwo.classList.add("neptune--active");
  toggleMenuSmItemThree.classList.remove("neptune--active");
});

// SMALL SCREEN SURFACE EVENT LISTENER
toggleMenuSmItemThree.addEventListener("click", () => {
  toggleMenuSmItemOne.classList.remove("neptune--active");
  toggleMenuSmItemTwo.classList.remove("neptune--active");
  toggleMenuSmItemThree.classList.add("neptune--active");
});

// MEDIUM/LARGE SCREEN OVERVIEW EVENT LISTENER
toggleMenuItemOne.addEventListener("click", () => {
  toggleMenuItemOne.classList.add("toggle-neptune--active");
  toggleMenuItemTwo.classList.remove("toggle-neptune--active");
  toggleMenuItemThree.classList.remove("toggle-neptune--active");
});

// MEDIUM/LARGE SCREEN STRUCTURE EVENT LISTENER
toggleMenuItemTwo.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-neptune--active");
  toggleMenuItemTwo.classList.add("toggle-neptune--active");
  toggleMenuItemThree.classList.remove("toggle-neptune--active");
});

// MEDIUM/LARGE SCREEN SURFACE EVENT LISTENER
toggleMenuItemThree.addEventListener("click", () => {
  toggleMenuItemOne.classList.remove("toggle-neptune--active");
  toggleMenuItemTwo.classList.remove("toggle-neptune--active");
  toggleMenuItemThree.classList.add("toggle-neptune--active");
});