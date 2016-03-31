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
let searchQuery_1 = 'partydown';
let searchQuery_2= 'muffintop'
let tweets;


//media to post as reply

// var imgURL =
//
// function uploadMedia(){
//   t.get()
// }
//search for tweets based on criteria

// function getSearchQuery(searchQuery, callback){
//   console.log(callback);
//   console.log(searchQuery);

// function getSearchData(searchData) {
//   var searchQuery = '';
//   t.get('search/tweets', {q: searchQuery ,count: 100}, function(err, data, response){
//     if(data.length) {
//       console.log(data.length);
//
//       // if(data.statuses.length < 20){
//       // }
//
//       for(var i = 0; i < data.length; i++) {
//         let tweetData = data.statuses[i];
//
//
//         if(!tweetId[tweetData.id_str]){
//           tweetId[tweetData.id_str]= true;
//           var newObj = {};
//           newObj.user = tweetData.user.screen_name;
//           newObj.text = tweetData.text;
//           newObj.source = tweetData.source;
//           newResults.push(newObj);
//           // console.log(tweetData.source);
//           // console.log(tweetData.query);
//         }
//
//       }
//
//     }
//
//     // console.log(data);
//     // console.log(data);
//     // console.log(data.entities);
//     // console.log(data.lang);
//     console.log(data.statuses[i]);
//     // console.log(data)
//
//
//     // console.log(data);
//   });
//
// }
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

///organizing search by type
// var textTypes = function(searchType, callback){
//   if(searchType.indexOf(',') > 0 || searchType.indexOf(' ') > 0){
//     this.type = 'text';
//   } else {
//     if(searchType.charAt(0) === '@'){
//       this.searchType
//       this.type = 'mention';
//     }
//   }
// }
// function getSearchData(searchData) {
// }
//text data
function searchText (query){
  t.get('search/tweets', {q: searchQuery ,count: 100}, function(err, data, response){
    // if(query.type === '')
    tweets = data.statuses;
    for(var i = 0; i < tweets.length; i++) {

      console.log('**************');
      console.log();
      console.log(tweets[i].text);
      console.log('**************');
      var newObj = {};
      newObj.text = tweets.text;
      newObj.source = tweets.source;
      newResults.push(newObj);

    }

  });
}
searchText();

function searchHash (query){
  // var search = 'party down' + query +' filter:links';
  t.get('search/tweets', {q: searchQuery, count: 10}, function(err, data, response){
    var resultHashTag;
    console.log(data.statuses[0].entities.hashtags[0]);
    // tweets = data.statuses;
    if(data.statuses[0].entities.urls.length > 0){
      resultUrl = data.statuses[0].entities.urls[0].url;
    } else {
      for(var i = 0; i < data.statuses.length; i++ ) {
        if(data.statuses[i].entities.urls.length > 0){
          resultUrl = data.statuses[i].entities.urls[0].url;
          i = data.statuses.length;
          console.log('result url: ' + resultUrl);

        }
          console.log('result url: ' + resultUrl);
      }
    }

  });
//
//
//
//
// }
