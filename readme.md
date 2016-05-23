# split-lines [![Build Status](https://travis-ci.org/sindresorhus/split-lines.svg?branch=master)](https://travis-ci.org/sindresorhus/split-lines)

> Split lines into an array of lines


## Install

```sh
$ npm install --save split-lines
```


## Usage

```js
var splitLines = require('split-lines');

splitLines('foo\r\nbar\r\nbaz\nrainbow');
//=> ['foo', 'bar', 'baz', 'rainbow']

splitLines('foo\r\nbar\r\nbaz\nrainbow', true);
//=> ['foo\rn', 'bar\r\n', 'baz\n', 'rainbow']
```

Not that the default behavior is to discard the separator characters. There is an optional second parameter `retainLineSeparators`, that causes the separators to be retained at the end of every line (except the last line, which will never contain a line separator).


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
