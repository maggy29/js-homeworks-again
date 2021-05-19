export default {
  query: '',
  fetchCountries() {
    const baseUrl = 'https://restcountries.eu/rest/v2/name/';
    const query = `${this.query}`;
    return fetch(baseUrl + query).then(response => response.json());
  },
};
