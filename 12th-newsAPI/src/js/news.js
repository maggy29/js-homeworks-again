import newsApi from './api/newsApi';
import newsTmpl from '../templates/newsTemplates.hbs';
import loader from './loader';

const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.news-list'),
  loadMore: document.querySelector('.js-load-more'),
};

refs.form.addEventListener('submit', handleQuery);
refs.loadMore.addEventListener('click', handleLoadMore);

function handleQuery(e) {
  e.preventDefault();
  const input = e.currentTarget.elements.query;
  clearNewsList();
  newsApi.resetPage();
  newsApi.query = input.value;
  fetchNews();
  input.value = '';
}

function handleLoadMore() {
  fetchNews();
}

function insertMarkup(articles) {
  const markup = newsTmpl(articles);
  refs.list.insertAdjacentHTML('beforeend', markup);
}

function fetchNews() {
  loader.show();
  newsApi
    .fetchQuery()
    .then(articles => {
      loader.hide();
      insertMarkup(articles);
    })
    .catch(er => console.error(er));
}

function clearNewsList() {
  refs.list.innerHTML = '';
}
