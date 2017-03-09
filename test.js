
const assert = require('assert');

const sha1 = require('./index.js');

assert(sha1('text') === '372ea08cab33e71c02c651dbc83a474d32c676ea');
