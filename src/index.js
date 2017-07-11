import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import routesConfig from './routes';
import main from './app/main/main';
import header from './app/header/header';
import title from './app/title';
import footer from './app/footer/footer';

import './index.scss';

// Loads the UIkit Icon plugin
UIkit.use(Icons);

angular
  .module('app', [uiRouter])
  .config(routesConfig)
  .component('app', main)
  .component('noltflixHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);
