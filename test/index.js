'use strict';

const assert = require('assert');
const checker = require('../lib/index');

describe('Compatibility checks', () => {
   it('Should pass', () => {
       assert.ok(checker());
   });
});
