import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './home.css';

const homeModule = angular.module('home', [
  uiRouter
]);

class HomeController {
  constructor() {
    "ngInject"
    this.name = 'home';
    window.scrollTo(0 , 0);
  }
}

homeModule.component('home', {
  bindings: {
    teas: '<'
  },
  template: require('./home.html'),
  controller: HomeController,
  controllerAs: 'homeCtrl'
});

homeModule.config(($stateProvider, $urlRouterProvider ) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      component: 'home',
      resolve:{
        teas: (Teas) => Teas.getExpensiveTeas(3)
      }
    });
});

export default homeModule.name;
