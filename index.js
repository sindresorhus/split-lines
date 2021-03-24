'use strict';

module.exports = (string, options) => {
	options = Object.assign({
		preserveNewLines: false
	}, options);

	if (typeof string !== 'string') {
		throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof string}\``);
	}

	if (!options.preserveNewlines) {
		return string.split(/\r?\n/);
	}

	const parts = string.split(/(\r?\n)/);
	const lines = [];

	for (let i = 0; i < parts.length; i += 2) {
		lines.push(parts[i] + (parts[i + 1] || ''));
	}

	return lines;
};
