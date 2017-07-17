import angular from 'angular';
import 'angular-mocks';
import header from './header.component';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('noltflixHeader', ['app/header/header.html'])
      .component('noltflixHeader', header);
    angular.mock.module('noltflixHeader');
  });

  it('should render username', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<noltflix-header></noltflix-header>')($rootScope);
    $rootScope.$digest();
    const headerUsername = element[0].querySelectorAll('.noltflix-header__user-list-name');
    expect(headerUsername[0].innerHTML).toEqual('Jhon Smith');
  }));
});
