'use strict';

/**
 * @ngdoc filter
 * @name invoicerApp.filter:HourFraction
 * @function
 * @description
 * # HourFraction
 * Filter in the invoicerApp.
 */
angular.module('invoicerApp')
  .filter('HourFraction', function () {
    return function (fraction) {
      var hours = Math.floor(fraction); // extract the hours (in 24 hour format)
      var mins = 60 * (fraction - hours);

      return hours + ':' + mins + ' hs.';
    };
  });
