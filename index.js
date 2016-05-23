'use strict';
module.exports = function (str, retainLineSeparators) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (!retainLineSeparators) {
		return str.split(/\r?\n/);
	}

	var parts = str.split(/(\r?\n)/);
	var lines = [];

	for (var i = 0; i < parts.length; i += 2) {
		lines.push(parts[i] + (parts[i + 1] || ''));
	}

	return lines;
};
