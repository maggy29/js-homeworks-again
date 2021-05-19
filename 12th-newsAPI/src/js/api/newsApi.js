export default {
  query: '',
  page: 1,
  fetchQuery() {
    const baseUrl = 'https://newsapi.org/v2/';
    const endpoint = 'everything';
    const query = `?q=${this.query}`;
    const pageSize = '&pageSize=4';
    const page = `&page=${this.page}`;
    const options = {
      headers: {
        Authorization: '4bfb7028515f45a494fedb3dbbe878c6',
      },
    };
    return fetch(baseUrl + endpoint + query + pageSize + page, options)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.articles;
      });
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
