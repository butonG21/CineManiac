import './scripts/component/nav-bar';
import './scripts/component/search-results';
import './style/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import ApiManager from './scripts/data/api-manager';

const search = async () => {
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    console.log(searchQuery);

    // Membuat permintaan pencarian film berdasarkan searchQuery
    const searchResults = await ApiManager.searchMovie(searchQuery);

    const searchResultsElement = document.querySelector('search-results');

    // Isi elemen dengan hasil pencarian
    searchResultsElement.results = searchResults;
  } catch (error) {
    console.error('Error fetching search results:', error);
  }
};

document.title = 'Hasil Pencarian';
search();
