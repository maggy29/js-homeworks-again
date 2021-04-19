"use strict";

const ul = document.querySelector(".js-nav");
ul.addEventListener("click", handleNav);

function handleNav(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  const activeLink = e.currentTarget.querySelector(".nav__link--active");
  if (activeLink) {
    activeLink.classList.remove("nav__link--active");
  }
  e.target.classList.add("nav__link--active");
}
