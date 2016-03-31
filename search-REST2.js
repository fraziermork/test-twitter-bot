'use strict';
// let express = require('express');
let Twit = require('twit');
// let Twitter = require('twitter');
let keys = require(__dirname + '/config2.js');
let t = new Twit(keys);
// let app = express();
let newResults= [];
let tweetId = {};
let count = 0;
let searchQuery = '';


function getSearchData(searchData) {
  searchQuery = 'hey there';
  t.get('search/tweets', {q: searchQuery , result_type: 'recent', lang: 'en',count: 100}, function(err, data, response){
    if(data.length) {
      var newObj = {};
      newObj.newTweet = data.statuses[0].text.toLowerCase();
      newObj.tweetId = data.statuses[0].id_str;
      newObj.tweetUser = data.statuses[0].user.screen_name;
      console.log(newObj.tweetId);

      return searchData(null, newObj);
    } else {
      console.log('There was an error returning the tweet');
      searchData(err, newObj);
    }
  });
}
getSearchData();
