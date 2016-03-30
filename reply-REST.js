'use strict';


let Twit = require('twit');
// let Twitter = require('twitter');
let keys = require(__dirname + '/config2.js');
let t = new Twit(keys);

//
// let port = 3000;
var newMentions = [];
var tweetId = {};


// var getTweetMentions = function() {
//   t.get('statuses/mentions_timeline',{count: 10}, (err, data, response)=>{
//     console.log('inside of get mentions');
//     if(data.length){
//       for(var i = 0; i < data.length; i++) {
//         var currTweet = data[i];
//         if(!tweetId[currTweet.id_str]){
//           tweetId[currTweet.id_str] = true;
//           var newObj = {};
//           newObj.user = currTweet.user.screen_name;
//           newObj.text = currTweet.text;
//           newMentions.push(newObj);
//         }
//
//       }
      // mentionReply();
      //
      // console.log('DATA: ' + data);
      // console.log('RES: ' + response);
      // console.log('OBHJ: ' + newObj);
      // console.log('TWEET ID: ' + tweetId);
      // console.log('NEW MENT: ' + newMentions);
      //
  //
  //   }
  //
  //
  // });
  // getTweetMentions();


  // reply to mentions

//   var mentionReply = function (){
//     for(var i =0; i < newMentions.length; i++){
//       var currentMention = newMentions[i];
//       var resTweet = 'Hi @';
//       resTweet += currentMention.user;
//       resTweet += 'Thanks for the mention';
//
//
//
//       console.log(resTweet);
//     }
//   };
// };
//post media that is chunked to given response
var filePath = 'https://www.petfinder.com/wp-content/uploads/2012/11/99233806-bringing-home-new-cat-632x475.jpg';
var content = fs.readFileSync(filePath, {encoding: 'base64'});
t.postMediaChunked({file_path: filePath}, function(err, data, res){
  console.log(data);
});
