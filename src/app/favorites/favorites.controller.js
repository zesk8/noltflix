/**
 * Favorites controller
 */
class FavoritesController {
  /**
   * Constructor for FavoritesComponent
   * @param {!angular.$state} $state
   * @param {!angular.$rootScope} $rootScope
   * @param {NoltflixService} NoltflixService
   * @ngInject
   */
  constructor($rootScope, $state, NoltflixService) {
    this._$state = $state;
    this._$rootScope = $rootScope;
    this._noltflixService = NoltflixService;
    this.movieShows = {};
  }
  /**
   * $onInit lifecycle method
   */
  $onInit() {
    // Get all movie/shows and store them in an object classified by category
    this._noltflixService.getAll().then((result) => {
      result.data.forEach((movieShow) => {
        if (!this.movieShows[movieShow.category]) {
          this.movieShows[movieShow.category] = [];
        }
        this.movieShows[movieShow.category].push(movieShow);
      });
    });
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
