import angular from 'angular';
import './app-footer.css'

const footerModule = angular.module('appFooter' , []);

class FooterController{
  constructor(){
    this.name = 'appFooter';
  }
}

footerModule.component('appFooter' , {
  bindings: {},
  controller:FooterController,
  controllerAs:'footerCtrl',
  template:require('./app-footer.html')
});

export default footerModule.name;
