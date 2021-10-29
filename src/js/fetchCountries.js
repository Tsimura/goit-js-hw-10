export default class FetchCountriesApi {
  constructor() {
    this.searchValue = '';
  }

  fetchCountries() {
    const url = `https://restcountries.com/v3.1/name/${this.searchValue}?fullText=true`;
    fetch(url)
      .then(response => {
        if (response.status === 404) {
          alert('Перевір запит!!!!');
        }
        return response.json();
      })
      .then(country => console.log(country))
      .catch(error => console.log(error));
  }

  get searchParameter() {
    return this.searchValue;
  }
  set searchParameter(newSearchValue) {
    this.searchValue = newSearchValue;
  }
}

// fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,flags.svg,languages')

// https://youtu.be/Fh8d14cY9AM?t=3124
