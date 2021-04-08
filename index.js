export default function splitLines(string, options = {}) {
	const {preserveNewlines = false} = options;

	if (typeof string !== 'string') {
		throw new TypeError(`Expected input to be of type \`string\`, got \`${typeof string}\``);
	}

	if (!preserveNewlines) {
		return string.split(/\r?\n/);
	}

	const parts = string.split(/(\r?\n)/);
	const lines = [];

	for (let index = 0; index < parts.length; index += 2) {
		lines.push(parts[index] + (parts[index + 1] || ''));
	}

	return lines;
}
