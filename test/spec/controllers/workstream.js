'use strict';

describe('Controller: WorkstreamCtrl', function () {

  // load the controller's module
  beforeEach(module('invoicerApp'));

  var WorkstreamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WorkstreamCtrl = $controller('WorkstreamCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
