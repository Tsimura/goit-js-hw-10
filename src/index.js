import './css/styles.css';
import getRefs from './js/get-refs';
import fetchCountries from '../src/js/fetchCountries';
import countriesTemplate from '../src/templates/country-list.hbs';

const debounce = require('lodash.debounce');

// const DEBOUNCE_DELAY = 300;
const DEBOUNCE_DELAY = 500;
const refs = getRefs();

refs.inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
  const form = e.currentTarget;
  let searchQuery = document.getElementById('search-box').value.trim();
  console.log(searchQuery);
  fetchCountries(searchQuery).then(renderCountryCard).catch(onFetchError);
}

function renderCountryCard(country) {
  //Рендер 1-ї карточки
  const markup = countriesTemplate(country);
  console.log(markup);
  refs.countryInfo.innerHTML = markup;
  refs.inputEl.value = '';
}

function onFetchError(error) {
  alert('Oops, there is no country with that name!');
}

function createCountryList(numberOfCountries) {
  console.log(numberOfCountries);
}

//==============================Мусорка!!!

// відправити запрос і перевірити кількість співпадінь
// вивести список країн
// якщо співпадння 1 вивести повну інформацію
// якщо більше одного, просто вивести списком
// якщо помилка, або забагато співпадінь - відповідне повідомлення
// очищави відповідні поля

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

// function searchCountry(e) {
//   let inputValue = e.target.value.trim();
//   if (!inputValue) {
//     alert('Перевір запит!!!');
//     return;
//   }
//   getCountries(inputValue);
// }

// function createFullCountryInfo(country) {
//   const markup = countriesTemplate(country);
//   //добавити розмітку з повною інформацією про країну
// }

// function clearList() {}

// function countriesFound() {}

// function getCountries(value) {
//   fetchCountriesApi(value).then(countries =>
//     countriesFound(countries).catch(error => requestFailed(error)),
//   );
// }

// function requestFailed() {
//   //нужно очистить поля
//   console.log('Oops, there is no country with that name!');
// }

//=====================================================================================
// function searchCountry(event) {
//   fetchCountriesApi.searchParameter = document.getElementById('search-box').value;
//   fetchCountriesApi.fetchCountries();
// }

// function renderListCountry(country) {
//   refs.countryInfo.innerHTML = '';
//   if (country.length === 1) {
//     console.log(country.length === 1);
//     const newCountry = country[0];
//     refs.countryInfo.insertAdjacentHTML('beforeend', countryTemplate(newCountry));
//   }
//   if (country.length <= 10 && country.length !== 1) {
//     refs.countryList.insertAdjacentHTML(
//       'beforeend',
//       countryTemplate(country.map(country => country.name)),
//     );
//   }
// }
