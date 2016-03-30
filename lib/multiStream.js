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
    mStream.on('tweet', function(tweet) {
      showTweetProps(tweet);
    });
  }
  lib.multiStream = multiStream;
};
