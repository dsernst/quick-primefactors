/*global describe,it*/

var pf = require('./index.js');
var should = require('should');

describe('pf(number)', function () {
  it('should return an array of prime factors for a number', function () {
    pf(10).should.eql([2, 5]);
    pf(24).should.eql([2, 2, 2, 3]);
    pf(126).should.eql([2, 3, 3, 7]);
  });

  it('should factor a 7-digit number in under a seconds', function () {
    this.timeout(1000);
    pf(3000000).should.eql([2, 2, 2, 2, 2, 2, 3, 5, 5, 5, 5, 5, 5]);
  });

  it('should factor another slightly smaller number in no time at all', function () {
    this.timeout(50);
    pf(2987000).should.eql([2, 2, 2, 5, 5, 5, 29, 103]);
  });

});
