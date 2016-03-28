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


console.log('about to make request');
//try to get it posting 
setInterval(function(){
  try {
    console.log('Request made to twitter');
    saySomething();
  } catch (err) {
    console.log('Error occured:', err);
  }
}, 60000);
