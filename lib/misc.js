'use strict';

module.exports = (t, lib) => {

  function saySomething (){
    let today = new Date();
    t.post('statuses/update', {status: 'It is ' + today.toISOString()}, (err, data, response) => {
      console.log('Err is', err);
      console.log('response is ', response);
      console.log('data is ', data);
    });
  }


  function findMentions() {
    t.get('statuses/mentions_timeline', { }, function(err, data, response) {
      console.log(data);
    });
  }

  function findMentionsStream() {
    var stream = t.stream('statuses/filter', { track: 'doceydraxton'});
    stream.on('tweet', function(tweet) {
      console.log(tweet);
    });
  }

  function getUserInfo() {
    t.get('account/verify_credentials', function(err, data, response) {
      if(err) {
        return console.error(err);
      }
      console.log('HERE BE data', data);
      console.log('HERE BE response', response);
    });
  }

  function getLatestFeed() {
    var myId;
    t.get('account/verify_credentials', function(err, data, response) {
      if(err) {
        return console.error(err);
      }
      var myScreenName = data.screen_name;
      myId = data.id_str;
      console.log('myScreenName is ' + myScreenName);
      console.log('myId is ' + myId);
    });
    t.get('statuses/user_timeline', { user_id: myId }, function(err, data, response) {
    });
  }

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

  lib.saySomething = saySomething;
  lib.findMentions = findMentions;
  lib.findMentionsStream = findMentionsStream;
  lib.getUserInfo = getUserInfo;
  lib.getLatestFeed = getLatestFeed;
  lib.showTweetProps = showTweetProps;

};
