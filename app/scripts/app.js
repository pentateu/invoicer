'use strict';

/**
 * @ngdoc overview
 * @name invoicerApp
 * @description
 * # invoicerApp
 *
 * Main module of the application.
 */
angular
  .module('invoicerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/workStream.html',
        controller: 'WorkStreamCtrl'
      })
      .when('/invoices', {
        templateUrl: 'views/invoices.html',
        controller: 'InvoicesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
