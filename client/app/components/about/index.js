import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './about.css';

const aboutModule = angular.module('about', [
  uiRouter
]);

class AboutController {
  constructor() {
    "ngInject"
    this.name = 'about';
    window.scrollTo(0 , 0);
  }
}

aboutModule.component('about', {
  bindings: {},
  template: require('./about.html'),
  controller: AboutController,
  controllerAs: 'aboutCtrl'
});

aboutModule.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('about', {
      url: '/about',
      component: 'about'
    });
});

export default aboutModule.name;
