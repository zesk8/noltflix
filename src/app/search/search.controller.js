/**
 * Search controller
 */
class SearchController {
  /**
   * Constructor for SearchComponent
   * @param {!angular.$http} $http
   * @param {!angular.$rootScope} $rootScope
   * @ngInject
   */
  constructor($http, $rootScope) {
    this._$http = $http;
    this._$rootScope = $rootScope;
    this.defaultResult = {
      url: '#',
      title: 'Not found',
    };
    this.listResult = {};
  }
  /**
   * Search movie show and set result to dropdown
   */
  search() {
    this.listResult = {};
    this._$http
      .get(`http://netflixroulette.net/api/api.php?title=${this.title}`)
      .then(
        (result) => {
          const title = result.data.show_title;
          this.listResult.url = `/search/${title}`;
          this.listResult.title = result.data.show_title;
          this._$rootScope.searchedMovieShow = result.data;
          this.title = '';
        },
        () => {
          this.listResult = this.defaultResult;
        },
      );
  }
}

export default SearchController;
