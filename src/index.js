import FetchCountriesApi from '../src/js/fetchCountries';
import countryTemplate from '../src/templates/country-list.hbs';
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

function renderListCountry(country) {
  refs.countryInfo.innerHTML = '';
  if (country.length === 1) {
    console.log(country.length === 1);
    const newCountry = country[0];
    refs.countryInfo.insertAdjacentHTML('beforeend', countryTemplate(newCountry));
  }
  if (country.length <= 10 && country.length !== 1) {
    refs.countryList.insertAdjacentHTML(
      'beforeend',
      countryTemplate(country.map(country => country.name)),
    );
  }
}
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
