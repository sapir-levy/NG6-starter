import angular from 'angular';
import './quantity-input.css'

const quantityInputModule = angular.module('quantityInput', []);

class QuantityInputController {
  constructor() {
    'ngInject';
    this.name = 'quantityInput';
  }
}

quantityInputModule.component('quantityInput', {
  bindings: {},
  template: require('./quantity-input.html'),
  controller: QuantityInputController,
  controllerAs: 'quantityInputCtrl'
});


export default quantityInputModule.name;
