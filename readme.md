# quick-primefactors

[![NPM Version](https://img.shields.io/npm/v/quick-primefactors.svg)](https://www.npmjs.com/package/quick-primefactors)
[![Build Status](https://travis-ci.org/dsernst/quick-primefactors.svg?branch=master)](https://travis-ci.org/dsernst/quick-primefactors)
[![Coverage Status](https://coveralls.io/repos/dsernst/quick-primefactors/badge.svg?branch=master&service=github)](https://coveralls.io/github/dsernst/quick-primefactors?branch=master)

Compute a number's prime factors as quickly as possible, using a cached Sieve of Eratosthenes. This is especially helpful to lookup many numbers' factors one after another.

## Install

```
$ npm install quick-primefactors
```

```js
var pf = require('quick-primefactors');
```

## Usage

```js
// Simple examples
console.log(pf(47)); // [47]
console.log(pf(48)); // [2, 2, 2, 2, 3]
console.log(pf(51)); // [3, 17]
console.log(pf(100)); // [2, 2, 5, 5]

// More challenging examples
console.log(pf(3000000)); // [2, 2, 2, 2, 2, 2, 3, 5, 5, 5, 5, 5, 5]
  // took less than 0.5 seconds

console.log(pf(2987000)); // [2, 2, 2, 5, 5, 5, 29, 103]
  // took less than 0.0005 seconds
```

This module uses a cached Sieve of Eratosthenes for constant time lookup. A new one will be automatically generated if the number you're testing is larger than the currently cached sieve's upper bound.

**For best results**, lookup your highest number first. This will ensure the sieve is only calculated a single time.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```
$ npm install
$ npm test
```

To test code coverage:

```
$ npm run cover
```
