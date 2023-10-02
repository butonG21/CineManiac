// Import elemen kustom yang diperlukan
import '../scripts/component/nav-bar';
// Import elemen kustom yang diperlukan
import '../scripts/component/trend-slider';
import '../scripts/component/trending-movie';
import '../scripts/component/trending-tv';

// Import ApiManager dan konfigurasi API
import ApiManager from '../scripts/data/api-manager';
import 'bootstrap/dist/css/bootstrap.min.css';

const main = async () => {
  try {
    // Ambil data Now Playing dari API
    const nowPlayingMovies = await ApiManager.getNowPlaying();

    // Ambil data Trending Movie dari API
    const trendingMovies = await ApiManager.getTrendingMovie();

    const trendingTv = await ApiManager.getTrendingTv();

    // Dapatkan elemen-elemen yang diperlukan
    const trendSliderElement = document.querySelector('trend-slider');
    const trendingMovieElement = document.querySelector('trending-movie');
    const trendingTvElement = document.querySelector('trending-Tv');

    // Isi elemen-elemen dengan data
    trendSliderElement.movies = nowPlayingMovies;
    trendingMovieElement.movies = trendingMovies;
    trendingTvElement.movies = trendingTv;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
document.title = 'CineManiac';
export default main;
