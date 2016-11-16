import angular from 'angular';
import './shopping-cart-item.css'

const shoppingCartItemModule = angular.module('shoppingCartItem', []);

class ShoppingCartItemController {
  constructor(ShoppingCart) {
    'ngInject';
    this.name = 'shoppingCartItem';
    this.shoppingCart = ShoppingCart;
    this.previousQuantity = this.quantity;
  }

  getItemTotalPrice() {
    return this.tea.price * this.quantity;
  }

  handleClick() {
    this.shoppingCart.addProduct(this.tea, this.quantity - this.previousQuantity);
    this.previousQuantity = this.quantity;
  }
}

shoppingCartItemModule.component('shoppingCartItem', {
  bindings: {
    tea: '<',
    quantity: '<'
  },
  template: require('./shopping-cart-item.html'),
  controller: ShoppingCartItemController,
  controllerAs: 'shoppingCartItemCtrl'
});


export default shoppingCartItemModule.name;
