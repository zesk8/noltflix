import CardController from './card.controller';
import template from './card.html';

const cardComponent = {
  restrict: 'E',
  template,
  controller: CardController,
  bindings: {
    content: '<',
  },
};

export default cardComponent;
