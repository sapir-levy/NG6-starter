/**
 * Created by Sapir on 05/11/2016.
 */
import angular from 'angular';
import TeasService from './teas.service';
import ShoppingCart from './shoppingCart.service'

const servicesModule = angular.module('app.Services' , []);
servicesModule.service('Teas' , TeasService);
servicesModule.service('ShoppingCart' , ShoppingCart);

export default servicesModule.name;
