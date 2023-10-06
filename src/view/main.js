/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import '../scripts/component/nav-bar';
import '../scripts/component/trend-slider';
import '../scripts/component/trending-movie';
import '../scripts/component/trending-tv';
import '../scripts/component/search-results';
import '../scripts/component/search-bar';
import ApiManager from '../scripts/data/api-manager';
import 'bootstrap/dist/css/bootstrap.min.css';

const main = async () => {
  try {
    const nowPlayingMovies = await ApiManager.getNowPlaying();
    const trendingMovies = await ApiManager.getTrendingMovie();
    const trendingTv = await ApiManager.getTrendingTv();

    const trendSliderElement = document.querySelector('trend-slider');
    const trendingMovieElement = document.querySelector('trending-movie');
    const trendingTvElement = document.querySelector('trending-tv');
    const searchQueryElement = document.querySelector('search-bar');

    trendSliderElement.movies = nowPlayingMovies;
    trendingMovieElement.movies = trendingMovies;
    trendingTvElement.movies = trendingTv;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

document.title = 'CineManiac';
export default main;
