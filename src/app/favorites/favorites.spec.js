import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-mocks';
import favorites from './favorites.component';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('noltflixFavorites', ['app/favorites/favorites.html', uiRouter])
      .component('noltflixFavorites', favorites);
    angular.mock.module('noltflixFavorites');
  });

  it('should render a noltflixCard', angular.mock.inject(($rootScope, $compile) => {
    $rootScope.storedMovieShows = {
      example: [{
        unit: 8456,
        show_id: 471412,
        show_title: 'El Dorado',
        release_year: '1966',
        rating: '4.0',
        category: 'Classic Movies',
        show_cast: 'John Wayne, Robert Mitchum, James Caan, Charlene Holt, Paul Fix, Arthur Hunnicutt, Michele Carey, R.G. Armstrong, Edward Asner, Christopher George',
        director: 'Howard Hawks',
        summary: 'Howard Hawks reunites with Rio Bravo star John Wayne in this classic Western about a hired gun who teams with a sheriff to thwart greedy ranchers.',
        poster: 'http://netflixroulette.net/api/posters/471412.jpg',
        mediatype: 0,
        runtime: 'N/A',
      }],
    };
    const element = $compile('<noltflix-favorites></noltflix-favorites>')($rootScope);
    $rootScope.$digest();
    expect(element.find('noltflix-card').length).toEqual(1);
  }));
});
