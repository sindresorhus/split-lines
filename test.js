import test from 'ava';
import fn from './';

test('should split lines', t => {
	t.deepEqual(fn('foo\r\nbar\r\nbaz\nrainbow'), ['foo', 'bar', 'baz', 'rainbow']);
});

test('retain line separators', t => {
	t.deepEqual(fn('foo\r\nbar\r\nbaz\nrainbow', true), ['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);
	t.deepEqual(fn('\nfoo\r\nbar\r\nbaz\nrainbow', true), ['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']);
	t.deepEqual(fn('\nfoo\r\nbar\r\nbaz\nrainbow\n', true), ['\n', 'foo\r\n', 'bar\r\n', 'baz\n', 'rainbow\n', '']);
});
