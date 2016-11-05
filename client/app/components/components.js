import angular from 'angular';
import Home from './home';
import About from './about/about';
import Collection from './tea-collection'

let componentModule = angular.module('app.components', [
  Home,
  About,
  Collection
])

.name;

export default componentModule;
