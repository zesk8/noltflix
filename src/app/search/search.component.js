import SearchController from './search.controller';
import template from './search.html';

const searchComponent = {
  restrict: 'E',
  controller: SearchController,
  controllerAs: '$ctrl',
  template,
  bindings: {
    isOpen: '=',
  },
};

export default searchComponent;
