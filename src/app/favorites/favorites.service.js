/**
 * Favorites Service
 */
class FavoritesService {
  /**
   * Constructor for Favorites Service
   * @param {!angular.$http} $http
   * @ngInject
   */
  constructor($http) {
    this._$http = $http;
    this.localApi = 'http://localhost:9000';
  }
  /**
   * Get movie/shows from netflix roulette
   * @param  {string} title Movie/Show title
   * @return {Promise}      Future data with result from roulette
   */
  getFromRoulette(title) {
    return this._$http.get(`http://netflixroulette.net/api/api.php?title=${title}`);
  }
  /**
   * Get all movie/shows stored in local DB
   * @return {Promise} Future data with all movie/shows
   */
  getAll() {
    return this._$http.get(`${this.localApi}/findAll`);
  }
  /**
   * Seve movie/movie show
   * @param  {Object} movieShow Movie/Show object info
   * @return {Promise}          Future data with result from DB
   */
  save(movieShow) {
    return this._$http({
      method: 'POST',
      url: `${this.localApi}/save`,
      data: movieShow,
    });
  }
}

export default FavoritesService;
