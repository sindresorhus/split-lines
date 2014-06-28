'use strict';
var assert = require('assert');
var splitLines = require('./');

it('should split lines', function () {
	assert.equal(splitLines('foo\r\nbar\r\nbaz\nrainbow').length, 4);
});
