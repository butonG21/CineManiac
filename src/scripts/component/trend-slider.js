import moment from 'moment';
import * as config from '../data/api-config';
import 'animate.css';

class TrendSlider extends HTMLElement {
  set movies(movieDataArray) {
    // eslint-disable-next-line no-underscore-dangle
    this._movieDataArray = movieDataArray;
    this.render();
    this.activateFirstItem();
  }

  render() {
    this.innerHTML = `
  <style>
      .trend-slider {
        margin-bottom: 20px;
        width: 100%;
      }
    </style>
      <div class="movie_slider w-100 mb-5 animate__animated">
        <div id="movieSlider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="7000">
          <div class="carousel-inner background-image">
            ${this._movieDataArray.map((movieData, index) => `
            <div class="carousel-item ${index === 0 ? 'active' : ''} animate__animated ${
  index === 0 ? 'animate__slideInLeft' : 'animate__slideInRight'}">
            <img src="${config.BCKDROP_IMG_URL}/${movieData.backdrop_path}" class="d-block w-100 dramatic-image" alt="${movieData.title}">
            <div class="carousel-caption d-none d-md-block text-start my-carousel-caption animate__animated animate__fadeInLeftBig">
              <h5 class="my-carousel-title">${movieData.title}</h5>
              ${this.getStarRatingIcons(movieData.vote_average)}
              <p class="my-carousel-paragraph release-date"><i class="bi bi-calendar3"></i> ${moment(movieData.release_date).format('MMM Do, YYYY')}</p>
              <p class="my-carousel-paragraph">${movieData.overview}</p>
            </div>
            <movie-item class="wrap-movie" .movie="${movieData}"></movie-item>
          </div>            `).join('')}
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#movieSlider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#movieSlider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
  }

  activateFirstItem() {
    const firstItem = this.querySelector('.carousel-item:first-child');
    if (firstItem) {
      firstItem.classList.add('active');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getStarRatingIcons(voteAverage) {
    if (voteAverage >= 7) {
      return `<p class="my-carousel-paragraph"><i class="bi bi-star-fill"></i> ${voteAverage}</p>`;
    } if (voteAverage >= 4) {
      return `<p class="my-carousel-paragraph"><i class="bi bi-star-half"></i> ${voteAverage}</p>`;
    }
    return `<p class="my-carousel-paragraph"><i class="bi bi-star"></i> ${voteAverage}</p>`;
  }
}

customElements.define('trend-slider', TrendSlider);
