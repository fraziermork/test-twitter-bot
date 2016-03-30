'use strict';

module.exports = (t, lib) => {

  function multiStream(streamOpts) {
    var searchStringAll = streamOpts.optsArray.map((cur) => {
      return cur.searchString;
    })
    .join();
    var reqParam = { track: searchStringAll };
    var mStream = t.stream('statuses/filter', reqParam);

    mStream.on('tweet', function(tweet) {
      var searchRegExp;
      streamOpts.optsArray.forEach((cur) => {

        if(cur.searchString.indexOf(' ') >= 0) { // spaces mean AND in search
          var andSearchString = cur.searchString.split(' ').reduce((acc, cur) => {
            return acc + '(?=.*' + cur + ')';
          }, '');
          searchRegExp = new RegExp(andSearchString, 'i');
        } else if(cur.searchString.indexOf(',') >= 0) { // commas mean OR
          var orSearchString = cur.searchString.replace(',', '|', 'g');
          searchRegExp = new RegExp(orSearchString, 'i');
        } else {
          searchRegExp = new RegExp(cur.searchString, 'i');
        }

        if(tweet.text.match(searchRegExp)) {
          cur.callback(tweet);
        }
        
      });
    });
  }
  lib.multiStream = multiStream;
};
