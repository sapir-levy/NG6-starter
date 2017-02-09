import angular from 'angular';
import uiRouter from 'angular-ui-router';
import './contact.css';

const contactModule = angular.module('contactUs', [
  uiRouter
]);

class ContactController {
  constructor() {
    "ngInject"
    this.name = 'contactUs';
    window.scrollTo(0 , 0);
  }
}

contactModule.component('contactUs', {
  bindings: {},
  template: require('./contactUs.html'),
  controller: ContactController,
  controllerAs: 'contactUsCtrl'
});

contactModule.config(($stateProvider) => {
  "ngInject";

  $stateProvider
    .state('contactUs', {
      url: '/contact',
      component: 'contactUs'
    });
});

export default contactModule.name;
