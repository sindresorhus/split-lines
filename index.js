'use strict';
module.exports = (str, opts) => {
	opts = Object.assign({
		preserveNewLines: false
	}, opts);

	if (typeof str !== 'string') {
		throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof str}\``);
	}

	if (!opts.preserveNewlines) {
		return str.split(/\r?\n/);
	}

	const parts = str.split(/(\r?\n)/);
	const lines = [];

	for (let i = 0; i < parts.length; i += 2) {
		lines.push(parts[i] + (parts[i + 1] || ''));
	}

	return lines;
};
