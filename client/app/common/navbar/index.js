/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import './navbar.css'

const navbarModule = angular.module('navbar', []);

class NavbarController {
  constructor() {
    this.name = 'navbar';
  }
}

navbarModule.component('navbar', {
  bindings: {},
  template: require('./navbar.html'),
  controller: NavbarController,
  controllerAs: 'navCtrl'
});


export default navbarModule.name;


