import axios from 'axios';
const key = '16743632-772c8ce0f5559f9ded6b8a6e6';


export default {
  query: '',
  page: 1,
  fetchImagesByQuery() {
    const queryUrl = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&key=${key}&q=${this.query}&page=${this.page}`;
    return axios.get(queryUrl).then(response => response.data.hits);
  },
  fetchImagesById(id){
    const idUrl = `https://pixabay.com/api/?id=${id}&key=${key}`;
    return axios.get(idUrl).then(response => response.data.hits);
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
