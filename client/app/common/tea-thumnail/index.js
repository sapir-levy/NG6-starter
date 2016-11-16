/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import './tea-thumbnail.css'

const teaThumbModule = angular.module('teaThumbnail', []);

class TeaThumbnailController {
  constructor(ShoppingCart) {
    this.name = 'teaThumbnail';
    this._shopCart = ShoppingCart;
  }

  onAddClick() {
    this._shopCart.addProduct(this.tea);
  }
}

teaThumbModule.component('teaThumbnail', {
  bindings: {
    tea:'<'
  },
  template: require('./tea-thumbnail.html'),
  controller: TeaThumbnailController,
  controllerAs: 'teaThumbCtrl'
});


export default teaThumbModule.name;


