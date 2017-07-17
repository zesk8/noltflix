import angular from 'angular';
import 'angular-mocks';
import main from './main.component';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('noltflixMain', ['app/main/main.html'])
      .component('noltflixMain', main);
    angular.mock.module('noltflixMain');
  });

  it('should render the header and footer', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<noltflix-main></noltflix-main>')($rootScope);
    $rootScope.$digest();
    expect(element.find('noltflix-header').length).toEqual(1);
    expect(element.find('noltflix-footer').length).toEqual(1);
  }));
});
