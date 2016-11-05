/**
 * Created by Sapir on 05/11/2016.
 */
import angular from 'angular';
import TeasService from './teas.service';

const servicesModule = angular.module('app.services' , []);
servicesModule.service('Teas' , TeasService);

export default servicesModule.name;
