import angular from 'angular';
import './empty-shopping-cart.css'

const emptyShoppingCartModule = angular.module('emptyShoppingCart', []);

class EmptyShopCartController {
  constructor() {
    this.name = 'emptyShoppingCart';
  }
}

emptyShoppingCartModule.component('emptyShoppingCart', {
  bindings: {},
  template: require('./empty-shopping-cart.html'),
  controller: EmptyShopCartController,
  controllerAs: 'emptyShoppingCartCtrl'
});


export default emptyShoppingCartModule.name;


