'use strict';


let Twit = require('twit');
let fs = require('fs');
let keys = require(__dirname + '/config2.js');
let t = new Twit(keys);

//
// let port = 3000;
var newMentions = [];
var tweetId = {};
let newStatus = 'Welcome ';
let filePath = '///Users/lisabisa25/Desktop/bern.png';



//update status
function textReply () {
  t.post('statuses/update', {status: newStatus}, function(err, data, response){
    console.log(data);
  });
}
textReply();


//post media that is chunked to given response
function mediaReply (){
  var b64content = fs.readFileSync(filePath, {encoding: 'base64'});
  t.post('media/upload', {media_data: b64content}, function(err, data, response){
    var mediaId = data.media_id_string;
    console.log(data.media_id_string);
    var params = {status: newStatus, media_ids: [mediaId]};
    console.log(data);
    t.post('statuses/update', params, function (err, data, response){
      console.log(data);
    });
  });
}
mediaReply();
