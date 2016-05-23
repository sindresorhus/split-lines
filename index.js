'use strict';
module.exports = function (str, opts) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string in the first argument, got ' + typeof str);
	}

	var preserveNewlines = opts && opts.preserveNewlines;

	if (!preserveNewlines) {
		return str.split(/\r?\n/);
	}

	var parts = str.split(/(\r?\n)/);
	var lines = [];

	for (var i = 0; i < parts.length; i += 2) {
		lines.push(parts[i] + (parts[i + 1] || ''));
	}

	return lines;
};
