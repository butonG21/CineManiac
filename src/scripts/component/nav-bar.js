import img from '../image/logo.png';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav class="navbar navbar-expand-sm navbar-dark bg-transparent">
    <div class="container">
    <a class="navbar-brand" href="./">
    <img src="${img}" class="logo" alt="Logo">
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="./">
          <i class="bi bi-house-door"></i> Home
        </a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="bi bi-film"></i> Trending
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="./#trending_movies">Movies</a></li>
          <li><a class="dropdown-item" href="/index.html#trending_tv">TV</a></li>
        </ul>
      </li>
    </ul>
  </div>

    <div>
    </nav>`;

    // Aktifkan Bootstrap's Navbar Toggler
    const navbarToggler = this.querySelector('.navbar-toggler');
    const navbarCollapse = this.querySelector('.navbar-collapse');
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  }
}

customElements.define('nav-bar', NavBar);
