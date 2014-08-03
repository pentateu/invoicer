'use strict';

describe('Controller: InvoicesCtrl', function () {

  // load the controller's module
  beforeEach(module('invoicerApp'));

  var InvoicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InvoicesCtrl = $controller('InvoicesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
