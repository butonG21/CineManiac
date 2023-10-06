import './scripts/component/nav-bar';
import './scripts/component/movie-detail';
import './style/style.css';
import './style/detail.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import axios from 'axios';
import * as config from './scripts/data/api-config';

const apiKey = config.API_KEY_PARAM;

function getTrailerVideo(videos) {
  if (videos && videos.results) {
    const trailer = videos.results.find((video) => video.type === 'Trailer' && video.official === true);
    if (trailer) {
      return `https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&version=3&playerapiid=ytplayer`;
    }
  }
  return '';
}

function fetchAndRenderMovieDetail(movieId) {
  const movieDetailElement = document.querySelector('movie-detail');

  async function getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${config.TMDB_BASE_URL}movie/${movieId}?${apiKey}&language=en-US`);
      const movieData = response.data;

      const videosResponse = await axios.get(`${config.TMDB_BASE_URL}movie/${movieId}/videos?${apiKey}&language=en-US`);
      movieData.videos = videosResponse.data;

      return movieData;
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }

  getMovieDetails(movieId)
    .then((movieData) => {
      movieDetailElement.movie = movieData;
      const trailerVideo = getTrailerVideo(movieData.videos);
      if (trailerVideo) {
        movieDetailElement.setTrailerUrl(trailerVideo);
      } else {
        console.error('Trailer video not found.');
        movieDetailElement.renderError('Trailer video not found.');
      }
    })
    .catch((error) => {
      console.error(error);
      movieDetailElement.renderError('Failed to load movie details.');
    });
}

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('movie');

if (movieId) {
  fetchAndRenderMovieDetail(movieId);
} else {
  console.error('Movie ID not found in URL.');

  const movieDetailElement = document.querySelector('movie-detail');
  movieDetailElement.renderError('Movie ID not found in URL.');
}
