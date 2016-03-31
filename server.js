'use strict';

let Twit      = require('twit');
let keys      = require(__dirname + '/config/config.js');
let t         = new Twit(keys);
let newResults= [];
let RestOpts = lib.RestOpts;
require('./lib')(t, lib);
