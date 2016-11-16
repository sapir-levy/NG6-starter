import angular from 'angular';
import Navbar from './navbar';
import Header from './app-header';
import TeaThumb from './tea-thumnail';
import HeaderShopCart from './header-shopping-cart';
import Footer from './app-footer';
import QuantityInput from './quantity-input';
import AddToCartBtn from './add-to-cart-btn';
import ShoppingCartItem from './shopping-cart-item';
import EmptyShoppingCart from './empty-shopping-cart';

const commonModule = angular.module('app.common', [
  Navbar,
  Header,
  TeaThumb,
  HeaderShopCart,
  Footer,
  QuantityInput,
  AddToCartBtn,
  ShoppingCartItem,
  EmptyShoppingCart
])
.name;


export default commonModule;
