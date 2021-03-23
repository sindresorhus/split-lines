import {expectType} from 'tsd';
import splitLines = require('.');

expectType<string[]>(splitLines('foo\r\nbar\r\nbaz\nrainbow'));
