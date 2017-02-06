import angular from 'angular';
import './search.css'

const searchModule = angular.module('search', []);

class SearchController {
  constructor() {
    'ngInject';
    this.name = 'search';
  }
}

searchModule.component('search', {
  bindings: {},
  template: require('./search.html'),
  controller: SearchController,
  controllerAs: 'searchCtrl'
});


export default searchModule.name;
