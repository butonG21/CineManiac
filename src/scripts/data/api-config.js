export const TMDB_BASE_URL = 'https://api.themoviedb.org/3/';
export const API_KEY_PARAM = 'api_key=5e1ca1e2117a59b614fa2be1e5a1a2c7';
export const BCKDROP_IMG_URL = 'https://image.tmdb.org/t/p/w1280';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const ReqEndpoint = {
  movie: {
    trending: `${TMDB_BASE_URL}trending/movie/week?${API_KEY_PARAM}`,
    nowPlaying: `${TMDB_BASE_URL}movie/now_playing?language=en-US&page=1&${API_KEY_PARAM}`,
    topRated: `${TMDB_BASE_URL}movie/top_rated?${API_KEY_PARAM}`,
    upComing: `${TMDB_BASE_URL}movie/upcoming?${API_KEY_PARAM}`,
  },
  tv: {
    trending: `${TMDB_BASE_URL}trending/tv/day?language=en-US&${API_KEY_PARAM}`,
    netflix: `${TMDB_BASE_URL}discover/tv?with_watch_providers=8&${API_KEY_PARAM}`,
    appletv: `${TMDB_BASE_URL}discover/tv?with_watch_providers=2&${API_KEY_PARAM}`,
    amazon: `${TMDB_BASE_URL}discover/tv?with_watch_providers=9&${API_KEY_PARAM}`,
    disneyPlus: `${TMDB_BASE_URL}discover/tv?with_watch_providers=337&${API_KEY_PARAM}`,
  },
  search: `${TMDB_BASE_URL}search/movie?${API_KEY_PARAM}&query=`,
  details: `${TMDB_BASE_URL}movie/`,
};
