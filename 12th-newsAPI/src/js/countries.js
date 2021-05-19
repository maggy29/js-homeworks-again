import countriesApi from './api/countriesApi';
import oneCountryTmpl from '../templates/oneContryTmpl.hbs';
import fewContriesTmpl from '../templates/fewCountriesTmpl.hbs';
import toastr from 'toastr';
import 'toastr/build/toastr.css';
import PNotify from './pnotify';

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '5000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

PNotify();

const debounce = require('lodash.debounce');
const refs = {
  input: document.querySelector('.js-country-query'),
  response: document.querySelector('.js-country-response'),
};

refs.input.addEventListener('input', debounce(handleCountryInput, 500));

function handleCountryInput(e) {
  countriesApi.query = e.target.value;
  if (countriesApi.query === '') {
    return;
  }
  countriesApi
    .fetchCountries()
    .then(data => {
      console.log(data);
      clearResults();
      if (data.length === 1) {
        insertOneCountryMarkup(data[0]);
      }
      if (data.length > 1 && data.length < 11) {
        insertFewCountriesMarkup(data);
      }
      if (data.length > 10) {
        toastr.info('Too Many Matches( Spetify Your Requiest!');
      }
      if (data.status === 404) {
        toastr.info('No Countries by this requiest(');
      }
    })
    .catch(err => toastr.error(err));
}
function insertOneCountryMarkup(data) {
  const markup = oneCountryTmpl(data);
  refs.response.insertAdjacentHTML('beforeend', markup);
}

function insertFewCountriesMarkup(data) {
  const markup = fewContriesTmpl(data);
  refs.response.insertAdjacentHTML('beforeend', markup);
}

function clearResults() {
  refs.response.innerHTML = '';
}
