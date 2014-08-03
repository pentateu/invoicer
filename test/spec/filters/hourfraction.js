'use strict';

describe('Filter: HourFraction', function () {

  // load the filter's module
  beforeEach(module('invoicerApp'));

  // initialize a new instance of the filter before each test
  var HourFraction;
  beforeEach(inject(function ($filter) {
    HourFraction = $filter('HourFraction');
  }));

  it('should return the input prefixed with "HourFraction filter:"', function () {
    var text = 'angularjs';
    expect(HourFraction(text)).toBe('HourFraction filter: ' + text);
  });

});
