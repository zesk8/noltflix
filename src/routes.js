/**
 * Routes configuration
 * @method routesConfig
 * @param  {Object} $stateProvider     Angular state provider
 * @param  {Object} $urlRouterProvider Angular route provider
 * @param  {Object} $locationProvider  Angular location provider
 * @ngInject
 */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/favorites');

  $stateProvider
    .state('base', {
      abstract: true,
      component: 'noltflixMain',
    })
    .state('favorites', {
      url: '/favorites',
      parent: 'base',
      views: {
        content: 'noltflixFavorites',
      },
    })
    .state('search', {
      url: '/search/:movieShow',
      parent: 'base',
      views: {
        content: 'noltflixMovieShow',
      },
    })
    .state('watchFavorite', {
      url: '/watch-favorite/:name',
      parent: 'base',
      views: {
        content: 'noltflixMovieShow',
      },
    });
}

export default routesConfig;
