import angular from 'angular';
import './header-shopping-cart.css'

const headerShoppingCartModule = angular.module('headerShoppingCart', []);

class HeaderShopCartController {
  constructor() {
    this.name = 'headerShoppingCart';
    this.itemsInCart = 0;
  }
}

headerShoppingCartModule.component('headerShoppingCart', {
  bindings: {},
  template: require('./header-shopping-cart.html'),
  controller: HeaderShopCartController,
  controllerAs: 'headerShopCartCtrl'
});


export default headerShoppingCartModule.name;


