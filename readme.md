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
//=> ['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
```

## API

### splitLines(input, [preserveNewlines])

#### input

type: `string`

String to split.

#### preserveNewlines

type: `boolean`<br>
default: `false`

Preserve the separators at the end of every line. Except the last line, which will never contain a line separator.

## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
