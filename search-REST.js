'use strict';
// let express = require('express');
let Twit = require('twit');
// let Twitter = require('twitter');
let keys = require(__dirname + '/config2.js');
let t = new Twit(keys);
// let app = express();
let newResults= [];
let tweetId = {};
//search for tweets based on criteria

// function getSearchQuery(searchQuery, callback){
//   console.log(callback);
t.get('search/tweets', {q:'Hello' ,count: 50}, (err, data, response)=>{
  if(data.length){
    for(var i = 0; i < data.length; i++) {
      var currSearch = data[i];
      if(!tweetId[currSearch._id]){
        // tweetId[currSearch._id = true;
        var newObj = {};
        newObj.user = currSearch.user.screen_name;
        newObj.text = currSearch.text;
        newResults.push(newObj);
      }

    }

  }
  // console.log(data);
  // console.log(data);
  // console.log(data.entities);
  // console.log(data.lang);

  // console.log(data);
});
//   console.log(searchQuery);
// }
// getSearchQuery();
// t.get('search/')
