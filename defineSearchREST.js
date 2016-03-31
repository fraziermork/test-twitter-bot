

function _SearchRestBot(content, stringSearch, optionsObj){
  if(!content || !stringSearch ){
    throw new Error('Invalid input');
  }
  this.botName = 'searchRestBot_' + parent.bots.searchRestBots.counter++;
  this.content = content;
  this.user = content.statuses[0].user.screen_name;
  this.source = content.statuses[0].source;
  this.created = content.statuses[0].created_at;
  this.tweetId = content.statuses[0].id_str;
  this.url = content.statuses[0].entities.urls[0].url;
  this.hashtags = content.statuses[0].entities.hashtags[0].text;
  this.mentions = content.statuses[0].entities.user
  this.

  var tweetObj = {};
  tweetObj.text = currentTweet.text;
  console.log('TEXT: ' + currentTweet.text);
  tweetObj.user = currentTweet.user.screen_name;
  console.log('USER: ' + currentTweet.user.screen_name);
  tweetObj.source = currentTweet.source;
  console.log('SOURCE: ' + currentTweet.source);
  tweetObj.created_at = currentTweet.created_at;
  console.log('CREATED: ' + currentTweet.created_at);

  tweetObj.id = currentTweet.id_str;
  console.log('TWEETID: ' + currentTweet.id_str);
  if(tweets[i].entities.urls.length){
    console.log('URL: ' + currentTweet.entities.urls[0].url);
    tweetObj.URL = currentTweet.entities.urls[0].url;
  }
  if(tweets[i].entities.hashtags.length){
    console.log('HASHTAG: #' + currentTweet.entities.hashtags[0].text);
  }
  if(currentTweet.entities.user_mentions.length){
    console.log('MENTIONS: @' + currentTweet.entities.user_mentions[0].screen_name);
  }

}



parent.__proto__.defineRestSearchBot = function(content, stringSearch, callback, optionsObj){
  console.log('TwitterBot.prototype.defineSearchRest called');

  try {
    let newSearchRestBot = new this._SearchRestBot(content, optionsObj);
    parent.bots.searchRestBots[newSearchRestBots.botName] = newTimerBot;

    if(callback){
      callback(null, newTimerBot.botName);
    }

  } catch (err){
    console.log('Error occured generating new TimerBot', err);
    if(callback){
      try {
        callback(err);
      } catch (e){
        console.log('Error running callback', e);
      }
    }
  }
};


_SearchBot.prototype._initializeREST = function(callback){
    console.log('_SearchBot.prototype.initializeREST called');


    // (function runBot (self) {
    //   try {
    //
    //
    //   } catch (err) {
    //
    //
    //   }
    // })(this);
  };


  //TODO: this takes the results of a REST GET search call and posts content for each one if it hasn't been posted for already
  _SearchBot.prototype._postContentForRESTResults = function(apiResults){
    console.log('_SearchBot.prototype._postContentForRESTResults called');



  };
