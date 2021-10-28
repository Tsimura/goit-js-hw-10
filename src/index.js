import './css/styles.css';
const ref = {
  inputEl: document.querySelector('#search-box'),
  countryList: document.querySelector('country-list'),
  countryInfo: document.querySelector('country-info'),
};
console.log('ref.inputEl:', ref.inputEl);
// console.log('ref.countryList:', ref.countryList);
// console.log('ref.countryInfo:', ref.countryInfo);

const DEBOUNCE_DELAY = 300;

// function fetchCountries(name) {
//   return fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => {
//       // console.log(response.json());
//       return response.json();
//     })
//     .catch(error => console.log(error));
// }

// fetchCountries(Peru);

const country = fetch('https://restcountries.com/v3.1/name/peru')
  .then(response => {
    // console.log(response.json());
    return response.json();
  })
  .then(country => console.log(Object.values(country)))
  .catch(error => console.log(error));

// console.log('country:', country);

// Тебе нужны только следующие свойства:
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков


// https://youtu.be/qjiUZOLJ1lA?t=3248