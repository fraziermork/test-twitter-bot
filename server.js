'use strict';

let Twit      = require('twit');
let keys      = require(__dirname + '/config/config.js');
var t         = new Twit(keys);


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

function searchStream(searchString) {
  var stream = t.stream('statuses/filter', { track: searchString});
  stream.on('tweet', function(tweet) {
    console.log(tweet.user.name);
    console.log(tweet.source);
    console.log(tweet.created_at);
    console.log(tweet.text);
    console.log('**********');
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
  t.get('account/verify_credentials', function(err, data, response) {
    if(err) {
      return console.error(err);
    }
    var myScreenName = data.screen_name;
    var myId = data.id_str;
    console.log('myScreenName is ' + myScreenName);
    console.log('myId is ' + myId);
  });
  t.get('statuses/user_timeline', { user_id: MyId }, function(err, data, response) {

  })
}


console.log('about to make request');
//try to get it posting
// setInterval(function(){
//   try {
//     console.log('Request made to twitter');
//     // saySomething();
//     findMentionsStream();
//   } catch (err) {
//     console.log('Error occured:', err);
//   }
// }, 30000);

try {
  console.log('Request made to twitter');
  // saySomething();
  searchStream('beatles');
} catch (err) {
  console.log('Error occured:', err);
}
