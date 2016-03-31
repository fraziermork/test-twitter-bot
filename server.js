'use strict';

let Twit      = require('twit');
let keys      = require(__dirname + '/config/config.js');
var t         = new Twit(keys);
var lib       = {};
require('./lib')(t, lib);
let StreamOpts = lib.StreamOpts;

require('./bogus_test/stream-test-inf')(t, lib, StreamOpts);
