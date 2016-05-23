import test from 'ava';
import m from './';

test('split lines', t => {
	t.deepEqual(m('foo\r\nbar\r\nbaz\nrainbow'), ['foo', 'bar', 'baz', 'rainbow']);
});

test('retain line separators', t => {
	t.deepEqual(m('foo\r\nbar\r\nbaz\nrainbow', true), ['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);
	t.deepEqual(m('\nfoo\r\nbar\r\nbaz\nrainbow', true), ['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);
	t.deepEqual(m('\nfoo\r\nbar\r\nbaz\nrainbow\n', true), ['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow\n', '']);
});
