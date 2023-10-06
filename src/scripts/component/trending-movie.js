/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import * as config from '../data/api-config';

class TrendingMovie extends HTMLElement {
  set movies(movieDataArray) {
    this._movieDataArray = movieDataArray;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container">
    <h3 class="fw-bold" id="trending_movies">Trending Movies</h3>
    <div class="movie-list" id="trending_movies">
      ${this._movieDataArray.map((movieData) => `
        <div class="movie-card">
          <div class="card text-bg-dark h-100 rounded-1 custom-card">
            <a href="./details.html?movie=${movieData.id}">
              <img src="${config.POSTER_URL}${movieData.poster_path}" class="card-img-top" alt="${movieData.title} Poster" />
            </a>
            <div class="card-details">
              <h5 class="card-title"><a href="./details.html?movie=${movieData.id}">${movieData.title}</a></h5>
              <p class="card-text">${moment(movieData.release_date).format('MMM Do, YYYY')}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="rating">
                  <i class="${getStarIconClass(movieData.vote_average)}"></i>
                  <span>${movieData.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
  `;
  }
}

function getStarIconClass(voteAverage) {
  if (parseInt(voteAverage, 10) >= 7) {
    return 'bi bi-star-fill';
  } if (parseInt(voteAverage, 10) < 7 && parseInt(voteAverage, 10) >= 4) {
    return 'bi bi-star-half';
  }
  return 'star bi-star';
}

customElements.define('trending-movie', TrendingMovie);
