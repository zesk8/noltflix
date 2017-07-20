/**
 * Search controller
 */
class SearchController {
  /**
   * Constructor for SearchComponent
   * @param {!angular.$rootScope} $rootScope
   * @param {!angular.$document} $document
   * @param {!angular.$timeout} $timeout
   * @param {!angular.$state} $state
   * @param {NoltflixService} NoltflixService
   * @ngInject
   */
  constructor($rootScope, $document, $timeout, $state, NoltflixService) {
    this._$rootScope = $rootScope;
    this._$document = $document[0];
    this._$timeout = $timeout;
    this._$state = $state;
    this._noltflixService = NoltflixService;
    this.defaultResult = 'Not found';
    this.showResults = false;
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
   * Go to movie/show detail page
   */
  goToMovieShow() {
    // Only if there's a result
    if (this.listResult !== 'Not found') {
      this.isOpen = false;
      this.showResults = false;
      this._$state.go('search', {
        movieShow: this.listResult,
      });
    }
  }
  /**
   * Search movie show and set result to dropdown
   */
  search() {
    const searchTitle = this.title;
    this._noltflixService.getFromRoulette(searchTitle)
      .then(
        (result) => {
          this.listResult = result.data.show_title;
          this._$rootScope.searchedMovieShow = result.data;
          this.title = '';
          this.showResults = true;
        },
        () => {
          this.listResult = this.defaultResult;
          this.showResults = true;
        },
      );
  }
}

export default SearchController;
