import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './tea-collection.css';

const teaCollectionModule = angular.module('teaCollection', [
  uiRouter
]);

class TeaCollection {
  constructor(Teas) {
    "ngInject";
    this.name = 'teaCollection';
    window.scrollTo(0, 0);
    this.teasService = Teas;
    this.searchString = "";
    this.resetCaffeineLevel();
  }

  handleClick(teaType) {
    this.searchString = "";
    this.teasService.checkedCaffeineLevel = [];
    this.resetCaffeineLevel();
    this.teasService.getTeasByCategory(teaType);
  }

  applySearch() {
    this.teasService.search(this.searchString);
  }

  resetCaffeineLevel(){
    this.none = false;
    this.low = false;
    this.medium = false;
    this.high = false;
  }
}

teaCollectionModule.component('teaCollection', {
  bindings: {
    teaTypes: '<',
    currentTeas: '<',
    searchString: '<'
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
      resolve: {
        teaTypes: (Teas) => Teas.getTeaTypes()
      }
    });
});

export default teaCollectionModule.name;
