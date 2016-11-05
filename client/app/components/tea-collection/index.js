import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './tea-collection.css';

const teaCollectionModule = angular.module('teaCollection', [
  uiRouter
]);

class TeaCollection {
  constructor() {
    this.name = 'teaCollection';
  }
}

teaCollectionModule.component('teaCollection', {
  bindings: {},
  template: require('./tea-collection.html'),
  controller: TeaCollection,
  controllerAs: 'teaCollectionCtrl'
});

teaCollectionModule.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('teaCollection', {
      url: '/collection',
      component: 'teaCollection'
    });
});

export default teaCollectionModule.name;
