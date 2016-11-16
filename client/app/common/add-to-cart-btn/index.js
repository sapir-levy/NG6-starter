/**
 * Created by Sapir on 09/11/2016.
 */
import angular from 'angular';
import './add-to-cart-btn.css'

const addToCartBtnModule = angular.module('addToCartBtn', []);

class AddToCartBtnController {
  constructor(ShoppingCart) {
    this.name = 'addToCartBtn';
    this._shopCart = ShoppingCart;
    console.log(this.tea);
    console.log(this.quantity)
  }

}

addToCartBtnModule.component('addToCartBtn', {
  bindings: {
    tea: '<',
    quantity:'<'
  },
  template: require('./add-to-cart-btn.html'),
  controller: AddToCartBtnController,
  controllerAs: 'addToCartBtnCtrl'
});


export default addToCartBtnModule.name;


