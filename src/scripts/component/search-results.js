/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import * as config from '../data/api-config';

class SearchResults extends HTMLElement {
  set results(searchResults) {
    this._searchResults = searchResults;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container">
        <h3 class="fw-bold">Hasil Pencarian</h3>
        <div class="row row-cols-1 row-cols-xl-5 g-4" id="search_results">
          ${this._searchResults.map((movieData) => `
            <div class="col">
              <div class="card text-bg-dark h-100 rounded-1">
                <a href="./details.html?movie=${movieData.id}">
                  <img src="${config.POSTER_URL}${movieData.poster_path}" class="card-img-top" alt="${movieData.title} Poster" loading="lazy" />
                </a>
                <div class="card-body">
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

customElements.define('search-results', SearchResults);
