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
  findMentionsStream();
} catch (err) {
  console.log('Error occured:', err);
}
