'use strict';

/**
 * @ngdoc service
 * @name invoicerApp.WorkStreamService
 * @description
 * # WorkStreamService
 * Service in the invoicerApp.
 */
angular.module('invoicerApp')
  .service('workStreamService', function WorkStreamService($q) {

    this.save = function(item){
      item = item;
    };

    this.delete = function(item){
      item = item;
    };

    this.list = function(){
      return $q.when([
        {
          description: 'Unit test runner can be started for different runtimes',
          dateTime: new Date(),
          hours: 0.9
        },
        {
          description: 'Unit test runner can be started for different runtimes',
          dateTime: new Date(),
          hours: 1.0
        },
        {
          description: 'Unit test runner can be started for different runtimes',
          dateTime: new Date(),
          hours: 0.5
        }

      ]);
    };

  });
