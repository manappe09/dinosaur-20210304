"use strict";

const nav = document.getElementById("menu");
const navMenu = document.getElementById("nav");
const navClose = document.getElementById("nav-close");

nav.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.style.right = 0;
});

navClose.addEventListener('click', () => {
  navMenu.style.right = '-80vw';
});