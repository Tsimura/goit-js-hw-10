import './css/styles.css';
import Notiflix from 'notiflix';
import getRefs from './js/get-refs';
import fetchCountriesList from '../src/templates/country-list.hbs';
import countryTemplate from '../src/templates/country-info.hbs';
import { fetchCountries } from '../src/js/fetchCountries';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;
const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const form = e.currentTarget;
  let searchQuery = document.getElementById('search-box').value.trim();
  // console.log(searchQuery);
  if (!searchQuery) {
    onFetchError();
    return;
  }
  fetchCountries(searchQuery).then(createCountryList).catch(onFetchError);
}

function renderCountryCard(country) {
  const markup = countryTemplate(country);
  // console.log(markup);
  refs.countryInfo.innerHTML = markup;
  refs.inputEl.value = '';
}

function onFetchError(error) {
  Notiflix.Notify.failure('Oops, there is no country with that name!!!');
  // console.log('Oops, there is no country with that name!!!');
}

function createCountryList(numberOfCountries) {
  // console.log(numberOfCountries);
  if (numberOfCountries.length <= 1) {
    clear();
    // console.log(country.name.official);
    // console.log(numberOfCountries[0].languages.name);
    renderCountryCard(numberOfCountries);
  }
  if (numberOfCountries.length > 1 && numberOfCountries.length <= 10) {
    clear();
    numberOfCountries.forEach(country => {
      const markup = fetchCountriesList(country.name.official);
      // console.log(country.name.official);
      refs.countryList.insertAdjacentHTML(
        'beforeend',
        `<li class="country-list__info">
        <img src='${country.flags.svg}' width='36' height='24' alt='${country.name.official}' class='country__img' />
        ${country.name.official}</li>`,
      );
    });
  }
  if (numberOfCountries.length > 10) {
    clear();
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    // console.log('Too many matches found. Please enter a more specific name.');
  }
}
function clear() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}
