'use strict';

module.exports = (t, lib) => {

  var StreamOpts = function(searchString, callback) {
    if(searchString.indexOf(',') >= 0 || searchString.indexOf(' ') >= 0) {
      this.searchString = searchString.replace(/\,\ +/, ',', 'g');
      this.type = 'text';
    } else {
      if (searchString.charAt(0) === '@') {
        this.searchString = searchString;
        this.type = 'mention';
      } else if (searchString.charAt(0) === '#') {
        this.searchString = searchString;
        this.type = 'hashtag';
      } else {
        this.searchString = searchString;
        this.type = 'text';
      }
    }

    console.log(this.searchString);
    this.callback = callback;
  };

  StreamOpts.optsArray = [];

  StreamOpts.addStreamOpts = function(searchString, type, callback) {
    this.optsArray.push(new StreamOpts(searchString, type, callback));
  };

  lib.StreamOpts = StreamOpts;
};
