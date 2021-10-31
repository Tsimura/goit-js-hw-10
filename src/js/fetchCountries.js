// export default class FetchCountriesApi {
//   constructor() {
//     this.searchValue = '';
//   }

//   fetchCountries() {
//     const url = `https://restcountries.com/v3.1/name/${this.searchValue}?fullText=true`;
//     fetch(url)
//       .then(response => {
//         if (response.status === 404) {
//           alert('Перевір запит!!!!');
//         }
//         return response.json();
//       })
//       .then(country => console.log(country))
//       .catch(error => console.log(error));
//   }

//   get searchParameter() {
//     return this.searchValue;
//   }
//   set searchParameter(newSearchValue) {
//     this.searchValue = newSearchValue;
//   }
// }

// function fetchCountriesApi(searchValue) {
//   const url = `https://restcountries.com/v3.1/name/${searchValue}`;

//   return fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then(country => console.log(country));
// }
function fetchCountries(name) {
  //Запрос на бек
  const url = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
  return fetch(url).then(response => {
    if (response.status === 404) {
      alert('Oops, there is no country with that name!');
    }
    return response.json();
  });
}

export default fetchCountries;
