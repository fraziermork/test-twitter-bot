'use strict';
// let express = require('express');
let Twit = require('twit');
// let Twitter = require('twitter');
let keys = require(__dirname + '/config2.js');
let t = new Twit(keys);
// let app = express();
let newResults= [];
let tweetId = {};
let i = 0
//search for tweets based on criteria

// function getSearchQuery(searchQuery, callback){
//   console.log(callback);
//   console.log(searchQuery);

function getSearchData(searchData, callback) {
  var searchQuery = 'Rolling Stones';
  t.get('search/tweets', {q: searchQuery ,count: 100}, function(err, data, response){
    if(data.length) {
      console.log(data.length);

      // if(data.statuses.length < 20){
      // }

      for(var i = 0; i < data.length; i++) {
        let tweetData = data.statuses[i];


        if(!tweetId[tweetData.id_str]){
          tweetId[tweetData.id_str]= true;
          var newObj = {};
          newObj.user = tweetData.user.screen_name;
          newObj.text = tweetData.text;
          newObj.source = tweetData.source;
          newResults.push(newObj);
          console.log(tweetData.source);
          console.log(tweetData.query);
        }

      }

    }

    // console.log(data);
    // console.log(data);
    // console.log(data.entities);
    // console.log(data.lang);
    console.log(data.statuses[i]);
    // console.log(data)


    // console.log(data);
  });

}
  // if(data.length > 20){
  // console.log(data.search_metadata);
  // console.log(data.hashtags);
// var newStatus = 'hey';
// t.post('statuses/update', {status: 'hey'}, function(err, data, response){
//   console.log(data);
// });

  // function showTweetProps(tweet) {
  //   console.log(tweet.user.name);
  //   console.log(tweet.source);
  //   console.log(tweet.created_at);
  //   console.log(tweet.text);
  //   console.log('coords: ' + tweet.coordinates);
  //   console.log('mentions:');
  //   tweet.entities.user_mentions.forEach((cur) => {
  //     console.log('@' + cur.screen_name + ' ' + cur.name);
  //   });
  //   console.log('hashtags:');
  //   tweet.entities.hashtags.forEach((cur) => {
  //     console.log(cur.text);
  //   });
  //   console.log('**********');
  // }
// // }
// getSearchQuery();
// t.get('search/')
