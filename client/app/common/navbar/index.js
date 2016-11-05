/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import './navbar.css'

const navbarModule = angular.module('navbar', []);

class NavbarController {
  constructor(Teas) {
    'ngInject';
    this._teas = Teas;
    this.name = 'navbar';
  }

  getTeas(){
    console.log("get teas in ctrl");
    this._teas.getTeas().then(
      (result) => {
        this.teasCollection = result.data.hello;
      },
      (err) => {
        console.log(err.data.errors);
      }
    );
  }

}

navbarModule.component('navbar', {
  bindings: {},
  template: require('./navbar.html'),
  controller: NavbarController,
  controllerAs: 'navCtrl'
});


export default navbarModule.name;


