declare namespace splitLines {
	interface Options {
		/**
		Preserve the line separator at the end of every line, except the last line, which will never contain one.

		@default false
		*/
		preserveNewlines?: boolean;
	}
}

/**
Split lines into an array of lines.

@param string - String to split.

@example
```
import splitLines = require('split-lines');

splitLines('foo\r\nbar\r\nbaz\nrainbow');
//=> ['foo', 'bar', 'baz', 'rainbow']

splitLines('foo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true});
//=> ['foo\r\n', 'bar\r\n', 'baz\n', 'rainbow']
```
*/
declare function splitLines(string: string, options?: splitLines.Options): string[];

export = splitLines;
