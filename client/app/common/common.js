import angular from 'angular';
import Navbar from './navbar';
import Header from './app-header';
import TeaThumb from './tea-thumnail';
import HeaderShopCart from './header-shopping-cart';
import Footer from './app-footer';

const commonModule = angular.module('app.common', [
  Navbar,
  Header,
  TeaThumb,
  HeaderShopCart,
  Footer
])
.name;


export default commonModule;
