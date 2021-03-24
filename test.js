import test from 'ava';
import splitLines from './index.js';

test('split lines', t => {
	t.deepEqual(splitLines('foo\r\nbar\r\nbaz\nrainbow'), ['foo', 'bar', 'baz', 'rainbow']);
});

test('preserveNewlines option', t => {
	t.deepEqual(
		splitLines('foo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true}),
		['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
	);

	t.deepEqual(
		splitLines('\nfoo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true}),
		['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
	);

	t.deepEqual(
		splitLines('\nfoo\r\nbar\r\nbaz\nrainbow\n', {preserveNewlines: true}),
		['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow\n', '']
	);
});
