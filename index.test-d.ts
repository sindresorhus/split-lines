import {expectType} from 'tsd';
import splitLines from './index.js';

expectType<string[]>(splitLines('foo\r\nbar\r\nbaz\nrainbow'));
expectType<string[]>(splitLines('foo\r\nbar\r\nbaz\nrainbow', {}));
expectType<string[]>(splitLines('foo\r\nbar\r\nbaz\nrainbow', {preserveNewlines: true}));
