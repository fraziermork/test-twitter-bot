'use strict';
let Twit      = require('twit');
let rewire    = require('rewire');
let chai      = require('chai');
let expect    = chai.expect;
let keys      = require(__dirname + '/../config/config.js');
console.log(keys);
let t         = new Twit(keys);

var server    = rewire(__dirname + '/../server.js');
server.__set__('t', t);



describe('it should post statuses', function(){
  this.timeout(130000);
  before('setting up the status', (done) => {
    setTimeout(done, 120000);
  });
  it('should let you post statuses', (done) => {
    t.get('statuses/user_timeline', {screen_name: 'backwards_bot'}, function(err, data, response){
      console.log('made request to get statuses');
      expect(err).to.equal(undefined);
      console.log('DATA IS _____________________________', data);
      console.log('RESPONSE IS _____________________________', response);
      done();
    });
  });
});
