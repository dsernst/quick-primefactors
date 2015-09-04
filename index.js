'use strict';

var sieve = {list: [], set: {}, limit: 0};

function updateSieve(newLimit) {
  sieve.list = require('sieve-of-eratosthenes')(newLimit + 1);
  sieve.set = require('lodash.indexby')(sieve.list);
  sieve.limit = newLimit;
}

function findFactors(number, factors) {
  if (sieve.set[number]) {
    factors.push(number);
    return factors;
  }

  var factor = require('lodash.find')(sieve.list, function (prime) {
    return number % prime === 0;
  });

  factors.push(factor);

  return findFactors(number / factor, factors);
}

module.exports = function (number) {
  if (!number || number === 1) {
    return [];
  }

  if (number > sieve.limit) {
    updateSieve(number);
  }

  return findFactors(number, []);
};
