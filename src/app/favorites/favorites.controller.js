/**
 * Favorites controller
 */
class FavoritesController {
  /**
   * Constructor for FavoritesComponent
   * @param {!angular.$state} $state
   * @param {!angular.$rootScope} $rootScope
   * @ngInject
   */
  constructor($rootScope, $state) {
    this._$state = $state;
    this._$rootScope = $rootScope;
    this.movieShows = this._$rootScope.storedMovieShows;
  }
  /**
   * Set current movie show and redirect to watch favorite page
   * @param {Object} favorite Object with movie show info
   */
  goToFavorite(favorite) {
    this._$rootScope.searchedMovieShow = favorite;
    this._$state.go('watchFavorite', {
      name: favorite.show_title,
    });
  }
}

export default FavoritesController;
