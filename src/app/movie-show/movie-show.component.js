import MovieShowController from './movie-show.controller';
import template from './movie-show.html';

const movieShowComponent = {
  restrict: 'E',
  template,
  controller: MovieShowController,
};

export default movieShowComponent;
