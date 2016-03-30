'use strict';

let Twit      = require('twit');
let keys      = require(__dirname + '/config/config.js');
var t         = new Twit(keys);
var lib       = {};
require('./lib')(t, lib);

var StreamOpts = function(searchString, type, callback) {
  this.searchString = searchString;
  this.type = type;
  this.callback = callback;
};

StreamOpts.optsArray = [];

StreamOpts.addStreamOpts = function(searchString, type, callback) {
  this.optsArray.push(new StreamOpts(searchString, type, callback));
};

StreamOpts.addStreamOpts('beatles', 'track', lib.beatlesCallback);
StreamOpts.addStreamOpts('drumpf', 'track', lib.drumpfCallback);

console.log('about to make request');
try {
  console.log('Request made to twitter');
  // lib.searchStream('beatles');
  lib.multiStream(StreamOpts);
} catch (err) {
  console.log('Error occured:', err);
}
