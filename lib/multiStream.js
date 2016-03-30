'use strict';

module.exports = (t, lib) => {

  function showTweetProps(tweet) {
    console.log(tweet.user.name);
    console.log(tweet.source);
    console.log(tweet.created_at);
    console.log(tweet.text);
    console.log('coords: ' + tweet.coordinates);
    console.log('mentions:');
    tweet.entities.user_mentions.forEach((cur) => {
      console.log('@' + cur.screen_name + ' ' + cur.name);
    });
    console.log('hashtags:');
    tweet.entities.hashtags.forEach((cur) => {
      console.log(cur.text);
    });
    // console.log('retweeted: ' + tweet.retweet_count);
    // console.log('favorites: '+ tweet.favorite_count);
    console.log('**********');
  }


  function multiStream(streamOpts) {
    console.dir(streamOpts);
    var searchStringAll = '';
    streamOpts.optsArray.forEach((cur) => {
      if(searchStringAll && cur.searchString) {
        searchStringAll += ',';
      }
      searchStringAll += cur.searchString;
    });
    var reqParam = { track: searchStringAll };
    var mStream = t.stream('statuses/filter', reqParam);
    // var search1 = new RegExp('/'  + streamOpts.optsArray[0].searchString + '/i');
    // var search1 = new RegExp(streamOpts.optsArray[0].searchString, 'i');
    // console.log('search1 is ', search1);
    // var search2 = new RegExp(streamOpts.optsArray[1].searchString, 'i');
    // console.log('search2 is ', search2);
    mStream.on('tweet', function(tweet) {
      streamOpts.optsArray.forEach((cur) => {
        console.log(cur);
        var searchRegExp = new RegExp(cur.searchString, 'i');
        if(tweet.text.match(searchRegExp)) {
          cur.callback(tweet);
        }
      });

      // console.log('search1 ', tweet.text.match(search1));
      // console.log('search2 ', tweet.text.match(search2));
      //
      // if(tweet.text.match(search1)) {
      //   console.log('I am a ' + search1 + ' tweet');
      //   showTweetProps(tweet);
      // } else if(tweet.text.match(search2)) {
      //   console.log('I am a ' + search2 + ' tweet');
      //   showTweetProps(tweet);
      // } else {
      //   console.log('WTF?');
      //   showTweetProps(tweet);
      // }
    });
  }
  lib.multiStream = multiStream;
};
