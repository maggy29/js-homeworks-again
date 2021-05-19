const loader = document.querySelector('.js-backdrop');

export default {
  show() {
    loader.classList.remove('is-hidden');
  },
  hide() {
    loader.classList.add('is-hidden');
  },
};
