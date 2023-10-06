/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListener('submit', this._handleSubmit);
  }

  _handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const searchQuery = formData.get('search');
    if (searchQuery) {
      window.location.href = `search.html?search=${searchQuery}`;
    }
  }

  render() {
    this.innerHTML = `
    <div class="search-section container mb-5">
        <form id="searchInput" action="" class="d-flex justify-content-between">
        <input
            dir="auto"
            id="movie_search"
            name="search"
            type="text"
            tabindex="1"
            autocorrect="off"
            autofill="off"
            autocomplete="off"
            spellcheck="false"
            placeholder="Search for a Movie"
            value=""
            class="form-control"
        />
        <button id="searchButton">search</button>
        </form>
  </div>
        `;
  }
}

customElements.define('search-bar', SearchBar);
