import angular from 'angular';
import 'angular-mocks';
import footer from './footer.component';

describe('footer component', () => {
  beforeEach(() => {
    angular
      .module('noltflixFooter', ['app/footer/footer.html'])
      .component('noltflixFooter', footer);
    angular.mock.module('noltflixFooter');
  });

  it('should render copy', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<noltflix-footer></noltflix-footer>')($rootScope);
    $rootScope.$digest();
    const footerCopy = element[0].querySelectorAll('.noltflix-footer__copy');
    expect(footerCopy[0].innerHTML).toEqual('Copyright 2017, Lorem ipsum dolor sit amet');
  }));
});
