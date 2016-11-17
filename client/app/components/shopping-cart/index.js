import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './shopping-cart.css';

const shoppingCartModule = angular.module('shoppingCart', [
  uiRouter
]);

class ShoppingCartController {
  constructor(ShoppingCart) {
    "ngInject"
    this.name = 'shoppingCart';
    this.shoppingCart = ShoppingCart;
    window.scrollTo(0 , 0);
  }
}

shoppingCartModule.component('shoppingCart', {
  bindings: {
    teas: '<'
  },
  template: require('./shopping-cart.html'),
  controller: ShoppingCartController,
  controllerAs: 'shoppingCartCtrl'
});

shoppingCartModule.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('shoppingCart', {
      url: '/cart',
      component: 'shoppingCart',
      resolve: {
        teas: (ShoppingCart) => ShoppingCart.products
      }
    });
});

export default  shoppingCartModule.name;
