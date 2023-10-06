/* eslint-disable no-underscore-dangle */
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
    <div class="movie-slider  mb-5 animate__animated">
      <div class="backdrop">
        <div class="backdrop-background">
          <div id="movieSlider" class="carousel" data-bs-ride="carousel" data-bs-interval="4000">
            <div class="carousel-inner backdrop-background-image-filter">
              ${this._movieDataArray.map((movieData, index) => `
              <div id="item" class="carousel-item ${index === 0 ? 'active' : ''} animate__animated ${index === 0 ? 'animate__slideInLeft' : 'animate__slideInRight'}">
                <img src="${config.BCKDROP_IMG_URL}/${movieData.backdrop_path}" alt="${movieData.title}">
                <div class="img-gradient"></div>
                <div class="slider">
                  <div class="slider-info animate__animated animate__fadeInLeftBig">
                    <div class="container d-flex justify-content-between align-items-center p-0">
                      <div class="info-text">
                        <div class="upper-text">
                          <div class="title">
                            <span class="fw-bold">
                              <h1><a href="./details.html?movie=${movieData.id}">${movieData.title}</a></h1>
                            </span>
                          </div>
                          <div class="rating-release d-flex align-items-center me-5">
                              <span class="fw-bold ratting">
                                ${this.getStarRatingIcons(movieData.vote_average)}
                              </span>
                              <span class="fw-bold release-date">
                                <i class="bi bi-calendar3"></i> ${moment(movieData.release_date).format('MMM Do, YYYY')}
                              </span>
                          </div>
                        </div>
                        <div class="bottom-text">
                          <div class="overview">
                            <span class="fw-bold">
                              <p>${movieData.overview}</p>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `).join('')}
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
      return `<i class="bi bi-star-fill"></i> ${voteAverage}`;
    } if (voteAverage >= 4) {
      return `<i class="bi bi-star-half"></i> ${voteAverage}`;
    }
    return `<i class="bi bi-star"></i> ${voteAverage}</p>`;
  }
}

customElements.define('trend-slider', TrendSlider);
