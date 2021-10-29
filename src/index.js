import FetchCountriesApi from './fetchCountries';
const debounce = require('lodash.debounce');
import './css/styles.css';

const refs = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('country-list'),
  countryInfo: document.querySelector('country-info'),
};
console.log('refs.inputEl:', refs.inputEl);
// console.log('refs.countryList:', refs.countryList);
// console.log('refs.countryInfo:', refs.countryInfo);
const fetchCountriesApi = new FetchCountriesApi();

// const DEBOUNCE_DELAY = 300;
const DEBOUNCE_DELAY = 500;

refs.inputEl.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry(event) {
  fetchCountriesApi.searchParameter = document.getElementById('search-box').value;
  // console.log(searchValue);
  fetchCountriesApi.fetchCountries();
}

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
