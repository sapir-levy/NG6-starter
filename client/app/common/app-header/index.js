/**
 * Created by Sapir on 03/11/2016.
 */
import angular from 'angular';
import './appHeader.css'

const headerModule = angular.module('appHeader' , []);

class HeaderController{
  constructor(){
    this.name = 'appHeader';
  }
}

headerModule.component('appHeader' , {
  bindings: {},
  controller:HeaderController,
  controllerAs:'headerCtrl',
  template:require('./app-header.html')
});

export default headerModule.name;
