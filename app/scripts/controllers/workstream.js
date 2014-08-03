'use strict';

/**
 * @ngdoc function
 * @name invoicerApp.controller:WorkstreamCtrl
 * @description
 * # WorkstreamCtrl
 * Controller of the invoicerApp
 */
angular.module('invoicerApp')
  .controller('WorkStreamCtrl', function ($scope, workStreamService) {
    $scope.workStreamCtrl = {};

    $scope.workStreamCtrl.list = [];

    function editableItem(item, service){
      item.editMode = false;
      item.edit = function () {
        item.editMode = true;
      };
      item.cancel = function () {
        item.editMode = false;
      };
      item.save = function () {
        service.save(item);
        item.editMode = false;
      };
      item.delete = function(){
        service.delete(item);
      };
      return item;
    }

    workStreamService.list().then(function(list){
      $scope.workStreamCtrl.list = list.map(function(item){
        return editableItem(item, workStreamService);
      });
    });

  });
