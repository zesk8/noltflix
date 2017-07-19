/**
 * Search controller
 */
class SearchController {
  /**
   * Constructor for SearchComponent
   * @param {!angular.$rootScope} $rootScope
   * @param {!angular.$document} $document
   * @param {!angular.$timeout} $timeout
   * @param {NoltflixService} NoltflixService
   * @ngInject
   */
  constructor($rootScope, $document, $timeout, NoltflixService) {
    this._$rootScope = $rootScope;
    this._$document = $document[0];
    this._$timeout = $timeout;
    this._noltflixService = NoltflixService;
    this.defaultResult = {
      url: '#',
      title: 'Not found',
    };
    this.listResult = {};
  }
  /**
   * Call search method and display result list when enter is recived
   * @param {Object} event Event object
   */
  clickSearch(event) {
    if (event.keyCode === 13) {
      this._$timeout(() => {
        const icon = this._$document.querySelector('.noltflix-search__icon');
        icon.click();
      });
    }
  }
  /**
   * Search movie show and set result to dropdown
   */
  search() {
    const searchTitle = this.title;
    this.listResult = {};
    this._noltflixService.getFromRoulette(searchTitle)
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
