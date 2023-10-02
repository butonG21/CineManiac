/* eslint-disable no-underscore-dangle */
import moment from 'moment';
import 'moment/locale/id';

class MovieDetail extends HTMLElement {
  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    if (!this._movie) {
      this.innerHTML = '<div class="alert alert-danger" role="alert">Movie not found.</div>';
      return;
    }

    const trailerVideo = this.getTrailerVideo();
    const backdropImage = `https://image.tmdb.org/t/p/w1280/${this._movie.backdrop_path}`;
    const modalId = 'trailerModal';
    const movieTitle = `${this._movie.title} (${moment(this._movie.release_date).format('YYYY')})`;
    document.title = `${movieTitle} | CineManiac`;

    this.innerHTML = `
    <div class="backdrop">
        <div class="backdrop-background">
            <div class="backdrop-background-image-filter">
                <img src="${backdropImage}" class="backdrop-background-image-filter" alt="${this._movie.title} backdrop">
                <div class="img-gradient"></div>
            </div>
        </div>


        <div class="backdrop-info">
            <div class="container d-flex justify-content-between align-items-center p-0">
                <div class="info">
                    <div class="upper-inftext">
                        <div class="genre">
                            <span class="fw-bold">${this.getGenres()}</span>
                        </div>
                        <div class="title">
                            <span class="fw-bold">
                                <h1>${this._movie.title} (${moment(this._movie.release_date).format('YYYY')})<h1>
                            </span>
                        </div>
                        <div class="tagline">
                            <span class="tagline-text text-white-90">"${this._movie.tagline}"</span>
                        </div>
                        <div class="runtime-rating d-flex align-items-center">
                            <div class="runtime me-5">
                                <i class="bi bi-clock"></i>
                                <span class="fw-bold run-time">${this.minutesToHours(this._movie.runtime)}</span>
                                <i class="${getStarIconClass(this._movie.vote_average)}"></i>
                                <span class="fw-bold">${this._movie.vote_average.toFixed(1)}</span>
                            </div>
                        </div>
                    </div>
                    <div class="bottominf-text">
                        <p class="fw-bold">Overview:</p>
                        <p>${this._movie.overview}</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

    <button class="btn  play-button" data-bs-toggle="modal" data-bs-target="#${modalId}">
        <i class="bi bi-play-circle-fill my-button"></i>
    </button>


    <!-- Trailer Modal -->
    <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalId}Label" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-xxl-down">
        <div class="modal-content bg-black">
          <div class="modal-body">
            <div class="wrap-button">
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="embed-responsive embed-responsive-16by9">
              <iframe class="embed-responsive-item" src="${trailerVideo}" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  getGenres() {
    if (this._movie.genres) {
      return this._movie.genres.map((genre) => genre.name).join(', ');
    }
    return '';
  }

  getDirector() {
    if (this._movie.credits && this._movie.credits.crew) {
      const director = this._movie.credits.crew.find((item) => item.job === 'Director');
      return director ? director.name : 'N/A';
    }
    return 'N/A';
  }

  getTrailerVideo() {
    if (this._movie.videos && this._movie.videos.results) {
      const trailer = this._movie.videos.results.find((item) => item.type === 'Trailer');
      if (trailer) {
        return `https://www.youtube.com/embed/${trailer.key}?enablejsapi=1&version=3&playerapiid=ytplayer`;
      }
    }
    return '';
  }

  minutesToHours(minutes) {
    const minute = minutes % 60;
    const hour = (minutes - minute) / 60;
    return `${hour}h ${minute}m`;
  }

  renderError(message) {
    this.innerHTML = `<div class="alert alert-danger" role="alert">${message}</div>`;
  }

  setTrailerUrl(url) {
    const trailerIframe = this.querySelector('.embed-responsive-item');
    if (trailerIframe) {
      trailerIframe.src = url;
    }
  }
}

function getStarIconClass(voteAverage) {
  if (parseInt(voteAverage) >= 7) {
    return 'bi bi-star-fill';
  } if (parseInt(voteAverage) < 7 && parseInt(voteAverage) >= 4) {
    return 'bi bi-star-half';
  }
  return 'star bi-star';
}

customElements.define('movie-detail', MovieDetail);
