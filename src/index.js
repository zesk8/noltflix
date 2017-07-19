import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import routesConfig from './routes';
import main from './app/main/main.component';
import header from './app/header/header.component';
import footer from './app/footer/footer.component';
import favorites from './app/favorites/favorites.component';
import favoritesService from './app/favorites/favorites.service';
import card from './app/card/card.component';
import movieShow from './app/movie-show/movie-show.component';
import search from './app/search/search.component';

import './index.scss';

// Loads the UIkit Icon plugin
UIkit.use(Icons);

angular
  .module('app', [uiRouter])
  .config(routesConfig)
  .run(($rootScope) => {
    // @todo: Delete and replace storedMovieShows for DB store
    $rootScope.storedMovieShows = {};
  })
  .component('noltflixMain', main)
  .component('noltflixHeader', header)
  .component('noltflixFooter', footer)
  .component('noltflixFavorites', favorites)
  .component('noltflixCard', card)
  .component('noltflixMovieShow', movieShow)
  .component('noltflixSearch', search)
  .service('NoltflixService', favoritesService);
