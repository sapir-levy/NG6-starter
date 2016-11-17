import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './tea-details.css';

const teaDetailsModule = angular.module('teaDetails', [
  uiRouter
]);

class TeaDetails {
  constructor() {
    this.name = 'teaDetails';
    this.quantity = 1;
    window.scrollTo(0 , 0);
  }
}

teaDetailsModule.component('teaDetails', {
  bindings: {
    item: '<'
  },
  template: require('./tea-details.html'),
  controller: TeaDetails,
  controllerAs: 'teaDetailsCtrl'
});

teaDetailsModule.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('teaDetails', {
      url: '/details/:id',
      component: 'teaDetails',
      resolve: {
        item: (Teas, $stateParams) => Teas.getTeaById($stateParams.id)
      }
    });
});

export default teaDetailsModule.name;
