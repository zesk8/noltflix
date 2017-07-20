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
    this.isOpenSearch = false;
  }
  /**
   * Display search component
   */
  displaySearch() {
    this.isOpenSearch = !this.isOpenSearch;
  }
}

export default HeaderController;
