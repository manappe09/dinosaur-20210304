'use strict';

const filterButtons = document.querySelectorAll(".js-filter__button");
const window = document.getElementById("filter-window");
let isOpen = false;

if (filterButtons) {
  filterButtons.forEach(filterButton => {
    filterButton.addEventListener("click", () => {
      if (!isOpen) {
        window.classList.add("is-open");
        isOpen = !isOpen;
      } else {
        window.classList.remove("is-open");
        isOpen = !isOpen;
      }
    });
  })
}