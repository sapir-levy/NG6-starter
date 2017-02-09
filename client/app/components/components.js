import angular from 'angular';
import Home from './home';
import Collection from './tea-collection'
import Details from './tea-details';
import ShoppingCart from './shopping-cart';
import About from './about';
import ContactUs from './contactUs';

let componentModule = angular.module('app.components', [
  Home,
  About,
  Collection,
  Details,
  ShoppingCart,
  ContactUs
])

.name;

export default componentModule;
