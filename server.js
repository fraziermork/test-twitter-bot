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

var StreamObj = function () {
  this.optsArray = [];
};

StreamObj.prototype.addStreamOptsObj = function(newOptsObj) {
  this.optsArray.push(newOptsObj);
};

StreamObj.prototype.addStreamOpts = function(searchString, type, callback) {
  this.addStreamOptsObj(new StreamOpts(searchString, type, callback));
};

var searchOptsIn = new StreamObj;

console.log(lib.beatlesCallback);
searchOptsIn.addStreamOpts('beatles', 'track', lib.beatlesCallback);
searchOptsIn.addStreamOpts('drumpf', 'track', lib.drumpfCallback);
// searchOptsIn.addStreamOpts('beatles', 'track', function(){console.log('track beatles');});
// searchOptsIn.addStreamOpts('drumpf', 'track', function(){console.log('track drumpf');});



// var multiStream = require('./lib/multiStream')(t);

console.log('about to make request');

try {
  console.log('Request made to twitter');
  // lib.searchStream('beatles');
  lib.multiStream(searchOptsIn);
} catch (err) {
  console.log('Error occured:', err);
}
