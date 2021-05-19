import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import pixApi from './api/pixabayApi';
import cardTmpl from '../templates/cardTmpl.hbs';
import pnotify from './pnotify';

const refs = {
  form: document.querySelector('.js-search-form'),
  list: document.querySelector('.js-list'),
  loadMore: document.querySelector('.js-load-more'),
  guard: document.querySelector('.guard'),
};

refs.form.addEventListener('submit', handleForm);
refs.loadMore.addEventListener('click', handleLoadMore);

function handleForm(e) {
  e.preventDefault();
  clearMarkup();
  const query = refs.form.elements.query.value;
  pixApi.resetPage();
  pixApi.query = query;
  goNextPage();
  refs.form.reset();
}

function handleLoadMore() {
  goNextPage();
}

function insertMarkup(data) {
  const markup = cardTmpl(data);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function goNextPage() {
  pixApi
    .fetchImagesByQuery()
    .then(hits => insertMarkup(hits))
    .catch(err => pnotify(err));
  pixApi.incrementPage();
  if (refs.list.children) {
    refs.list.addEventListener('click', handlePicClick);
  }
}

function handlePicClick(e) {
  const id = e.target.alt;
  if (e.target === e.currentTarget) {
    return;
  }

  pixApi
    .fetchImagesById(id)
    .then(hits => hits[0].largeImageURL)
    .then(largeImageURL => {
      const instance = basicLightbox.create(`
  <div class="modal">
      <img src="${largeImageURL}" alt="big picture"
  </div>
`);

      instance.show();
    });
}

function clearMarkup() {
  refs.list.innerHTML = '';
}

//= ======infScroll=====================================

function onEntry(entry) {
  if (entry[0].isIntersecting && pixApi.query !== '') {
    goNextPage();
  }
}
const options = {
  threshold: 0.5,
  rootMargin: '100px 0px',
};
const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.guard);
