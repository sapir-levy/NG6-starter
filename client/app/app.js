import angular from 'angular';
import angularAnimate from 'angular-animate';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import Services from './services';
import AppComponent from './app.component';
import 'normalize.css';
import 'angular-material/angular-material.css';
import './app.styl'

angular.module('app', [
  uiRouter,
  angularAnimate,
  angularMaterial,
  Common,
  Components,
  Services
])
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(true).hashPrefix('!');
  })

  .component('app', AppComponent);

