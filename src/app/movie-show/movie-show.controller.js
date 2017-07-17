/**
 * Movie show controller
 */
class MovieShowController {
  /**
   * Constructor for MoviewShowComponent
   * @param {!angular.$state} $state
   * @param {!angular.$rootScope} $rootScope
   * @ngInject
   */
  constructor($state, $rootScope) {
    this._$state = $state;
    this._$rootScope = $rootScope;
    this.setMovieShow();
  }
  /**
   * Set current movie show elemtn and redirect to favorites pages if inital current movie show
   * is empty
   */
  setMovieShow() {
    if (!this._$rootScope.searchedMovieShow) {
      this._$state.go('favorites');
    }
    this.movieShowInfo = this._$rootScope.searchedMovieShow;
    this._$rootScope.searchedMovieShow = false;
  }
  /**
   * Add favorite
   * @return {boolean|Object}
   */
  addFavorite() {
    // @todo: Instead to stop execution, delete current movieShow,
    // not necessary now (due to movieShows are stored in browser)
    if (this.movieShowInfo.isStored) {
      return false;
    }
    this.movieShowInfo.isStored = true;
    const movieShow = this.movieShowInfo;
    // Store movieShow (only in browser)
    // @todo: change for BE implementation
    if (!this._$rootScope.storedMovieShows[movieShow.category]) {
      this._$rootScope.storedMovieShows[movieShow.category] = [];
    }
    return this._$rootScope.storedMovieShows[movieShow.category].push(movieShow);
  }
}

export default MovieShowController;
