import FavoritesController from './favorites.controller';
import template from './favorites.html';

const favoritesComponent = {
  restrict: 'E',
  template,
  controller: FavoritesController,
};

export default favoritesComponent;
