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

  getTeasByCategory(category){
    if(category == 'All')
      return this.teas;

    return this.teas.filter(t=> t.teaType == category)
  }

  getTeaTypes(){
    const teaTypes = ['All'];
    this.teas.filter( t =>  {
      return teaTypes.indexOf(t.teaType) == -1 && teaTypes.push(t.teaType);
    });
    return teaTypes;
  }
}

teaCollectionModule.component('teaCollection', {
  bindings: {
    teas:'<'
  },
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
      component: 'teaCollection',
      resolve:{
        teas : (Teas) => Teas.getAllTeas()
      }
    });
});

export default teaCollectionModule.name;
