/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './navbar.styl';

const navbarModule = angular.module('navbar', [
  uiRouter
]);

class NavbarController {
  constructor() {
    this.name = 'navbar';
  }
}

navbarModule.component('navbar', {
  bindings: {},
  template: require('./navbar.html'),
  controller: NavbarController,
  controllerAs: 'navCtrl'
});

navbarModule.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('navbar', {
      url: '/',
      component: 'navbar'
    });
});

export default navbarModule.name;


