import angular from 'angular';
import './header-shopping-cart.css'

const headerShoppingCartModule = angular.module('headerShoppingCart', []);

class HeaderShopCartController {
  constructor(ShoppingCart) {
    this.name = 'headerShoppingCart';
    this._shopCart = ShoppingCart;
  }
}

headerShoppingCartModule.component('headerShoppingCart', {
  bindings: {},
  template: require('./header-shopping-cart.html'),
  controller: HeaderShopCartController,
  controllerAs: 'headerShopCartCtrl'
});


export default headerShoppingCartModule.name;


