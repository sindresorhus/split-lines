import test from 'ava';
import m from '.';

test('split lines', t => {
	t.deepEqual(m('foo\r\nbar\r\nbaz\nrainbow'), ['foo', 'bar', 'baz', 'rainbow']);
});

test('preserveNewlines option', t => {
	t.deepEqual(
		m('foo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true}),
		['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
	);

	t.deepEqual(
		m('\nfoo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true}),
		['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
	);

	t.deepEqual(
		m('\nfoo\r\nbar\r\nbaz\nrainbow\n', {preserveNewlines: true}),
		['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow\n', '']
	);
});
