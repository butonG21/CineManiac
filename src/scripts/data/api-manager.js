import axios from 'axios';
import * as config from './api-config';

class ApiManager {
  static async getNowPlaying() {
    try {
      const response = await axios.get(config.ReqEndpoint.movie.nowPlaying);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getTrendingMovie() {
    try {
      const response = await axios.get(config.ReqEndpoint.movie.trending);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getTrendingTv() {
    try {
      const response = await axios.get(config.ReqEndpoint.tv.trending);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getNetflixSeries() {
    try {
      const response = await axios.get(config.ReqEndpoint.tv.netflix);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getApleTv() {
    try {
      const response = await axios.get(config.ReqEndpoint.tv.appletv);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getamazonSeries() {
    try {
      const response = await axios.get(config.ReqEndpoint.tv.amazon);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getDisneyPlus() {
    try {
      const response = await axios.get(config.ReqEndpoint.tv.disneyPlus);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async searchMovie(title) {
    try {
      const response = await axios.get(`${config.ReqEndpoint.search}${title}`);
      const { data } = response;
      if (data.results) {
        return data.results;
      }
      throw new Error(`${title} is Not Found`);
    } catch (error) {
      console.error(error);
    }
  }

  static async getMovieDetails(movieId) {
    try {
      const response = await axios.get(`${config.ReqEndpoint.details}${movieId}?${config.API_KEY_PARAM}`);
      const { data } = response;
      return data; // You'll need to parse this data to extract movie details.
    } catch (error) {
      console.error('Error fetching movie details:', error);
      throw error;
    }
  }
}

export default ApiManager;
