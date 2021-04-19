"use strict";

const tags = document.querySelector(".js-tags");
tags.addEventListener("click", handleTagClick);

function handleTagClick(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  e.target.classList.toggle("tags__item--active");
}
