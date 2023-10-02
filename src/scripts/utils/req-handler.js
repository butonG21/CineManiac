import * as config from '../data/api-config';
import * as format from './Formatting';

export function requestHeader() {
  return {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  };
}

export function requestUrl(endpoint, params) {
  if (params === null) {
    params = [];
  }
  params.push({
    key: 'api-key',
    value: config.MYAPI_KEY,
  });
  params.push({
    key: 'include_adult',
    value: false,
  });
  params.push({
    key: 'include_video',
    value: false,
  });
  const paramsArray = params.map((param) => `${param.key}=${param.value}`);
  return `${config.TMDB_BASE_URL + endpoint}?${paramsArray.join('&')}`;
}

export function getImg(path) {
  if (path === null) {
    return null;
  }
  return config.POSTER_URL + path;
}
