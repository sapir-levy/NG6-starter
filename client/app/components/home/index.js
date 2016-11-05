import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './home.css';

const homeModule = angular.module('home', [
  uiRouter
]);

class HomeController {
  constructor() {
    this.name = 'home';
  }
}

homeModule.component('home', {
  bindings: {},
  template: require('./home.html'),
  controller: HomeController,
  controllerAs: 'homeCtrl'
});

homeModule.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'home'
      });
  });

export default homeModule.name;
