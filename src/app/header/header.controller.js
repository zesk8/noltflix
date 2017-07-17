/**
 * Header controller
 */
class HeaderController {
  /**
   * Constructor for HeaderComponent
   */
  constructor() {
    this.dropDownLinks = [
      {
        url: '#', name: 'Home',
      },
      {
        url: '/favorites', name: 'My favorites',
      },
      {
        url: '#', name: 'Sign out',
      },
    ];
  }
}

export default HeaderController;
