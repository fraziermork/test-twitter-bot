'use strict';

module.exports = (t, lib, StreamOpts) => {

  // StreamOpts.addStreamOpts('beatles', 'track', lib.beatlesCallback);
  StreamOpts.addStreamOpts('#javascript', lib.javascriptCallback);
  // StreamOpts.addStreamOpts('python', 'track', lib.pythonCallback);

  console.log('about to make request');
  try {
    console.log('Request made to twitter');
    lib.multiStream(StreamOpts);
  } catch (err) {
    console.log('Error occured:', err);
  }

  setTimeout(function() {
    StreamOpts.addStreamOpts('@voxdotcom', lib.beatlesCallback);
    // StreamOpts.addStreamOpts('drumpf', lib.drumpfCallback);

    console.log('about to make request');
    try {
      console.log('Request made to twitter');
      lib.multiStream(StreamOpts);
    } catch (err) {
      console.log('Error occured:', err);
    }
  }, 60000);

};
