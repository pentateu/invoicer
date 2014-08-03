'use strict';

describe('Service: WorkStreamService', function () {

  // load the service's module
  beforeEach(module('invoicerApp'));

  // instantiate service
  var WorkStreamService;
  beforeEach(inject(function (_WorkStreamService_) {
    WorkStreamService = _WorkStreamService_;
  }));

  it('should do something', function () {
    expect(!!WorkStreamService).toBe(true);
  });

});
