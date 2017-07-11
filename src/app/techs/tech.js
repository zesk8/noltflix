import template from './tech.html';

const techComponent = {
  restrict: 'E',
  template,
  bindings: {
    tech: '<'
  }
};

export default techComponent;
