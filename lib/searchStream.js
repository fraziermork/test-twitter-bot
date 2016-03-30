module.exports = (t, lib) => {
  function searchStream(searchString, callback) {
    var stream = t.stream('statuses/filter', { track: searchString });
    stream.on('tweet', function(tweet) {
      console.log(tweet.user.name);
      console.log(tweet.source);
      console.log(tweet.created_at);
      console.log(tweet.text);
      console.log('coords: ' + tweet.coordinates);
      console.log('mentions:');
      tweet.entities.user_mentions.forEach((cur) => {
        console.log('@' + cur.screen_name + ' ' + cur.name);
      });
      console.log('hashtags:');
      tweet.entities.hashtags.forEach((cur) => {
        console.log(cur.text);
      });
      // console.log('retweeted: ' + tweet.retweet_count);
      // console.log('favorites: '+ tweet.favorite_count);
      console.log('**********');
    });
  }
  lib.searchStream = searchStream;
}
