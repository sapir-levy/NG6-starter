/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import './tea-thumbnail.css'

const teaThumbModule = angular.module('teaThumbnail', []);

class TeaThumbnailController {
  constructor() {
    this.name = 'teaThumbnail';
  }

  onClick() {
    console.log("added to cart");
  }
}

teaThumbModule.component('teaThumbnail', {
  bindings: {},
  template: require('./tea-thumbnail.html'),
  controller: TeaThumbnailController,
  controllerAs: 'teaThumbCtrl'
});


export default teaThumbModule.name;


