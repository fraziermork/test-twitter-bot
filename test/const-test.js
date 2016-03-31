'use strict';

let chai = require('chai');
let expect = chai.expect;

let Twit = require('twit');
let testKeys = require(__dirname + '/../config/config.js');
let twit = new Twit(testKeys);
let lib = {};
require(__dirname + '/../lib')(twit, lib);
let StreamOpts = lib.StreamOpts;
let testCallback = function(input) {
  return input + '!';
};

describe('constStream.js', function() {
  describe('StreamOpts constructor', function() {
    it('should create a new text StreamOpts object', function(done) {
      var plainOpts = new StreamOpts('test', testCallback);
      expect(plainOpts).to.be.an('object');
      expect(plainOpts.searchString).to.eql('test');
      expect(plainOpts.type).to.eql('text');
      expect(plainOpts.callback).to.be.a('function');
      expect(plainOpts.callback('plain')).to.eql('plain!');
      done();
    });
    it('should remove spaces after commas in a new text StreamOpts object', function(done) {
      var commaSpaceOpts = new StreamOpts('Girl,   Interrupted', testCallback);
      expect(commaSpaceOpts).to.be.an('object');
      expect(commaSpaceOpts.searchString).to.eql('Girl,Interrupted');
      expect(commaSpaceOpts.type).to.eql('text');
      expect(commaSpaceOpts.callback).to.be.a('function');
      expect(commaSpaceOpts.callback('comma')).to.eql('comma!');
      done();
    });
    it('should create a new mention StreamOpts object', function(done) {
      var mentionOpts = new StreamOpts('@name', testCallback);
      expect(mentionOpts).to.be.an('object');
      expect(mentionOpts.searchString).to.eql('@name');
      expect(mentionOpts.type).to.eql('mention');
      expect(mentionOpts.callback).to.be.a('function');
      expect(mentionOpts.callback('mention')).to.eql('mention!');
      done();
    });
    it('should create a new hashtag StreamOpts object', function(done) {
      var hashtagOpts = new StreamOpts('#tag', testCallback);
      expect(hashtagOpts).to.be.an('object');
      expect(hashtagOpts.searchString).to.eql('#tag');
      expect(hashtagOpts.type).to.eql('hashtag');
      expect(hashtagOpts.callback).to.be.a('function');
      expect(hashtagOpts.callback('hashtag')).to.eql('hashtag!');
      done();
    });

  });
  describe('addStreamOpts function', function() {
    it('should start out with a blank optsArray', function() {
      expect(StreamOpts.optsArray).to.eql([]);
    });
    it('should be able to add a new StreamOpts to the array', function(done) {
      StreamOpts.addStreamOpts('@fakedansavage', testCallback);
      expect(StreamOpts.optsArray[0]).to.be.an('object');
      expect(StreamOpts.optsArray[0] instanceof StreamOpts).to.eql(true);
      expect(StreamOpts.optsArray[0].searchString).to.eql('@fakedansavage');
      expect(StreamOpts.optsArray[0].type).to.eql('mention');
      expect(StreamOpts.optsArray[0].callback).to.be.a('function');
      expect(StreamOpts.optsArray[0].callback('arr1')).to.eql('arr1!');
      done();
    });
    it('should be able to add another StreamOpts to the array', function(done) {
      StreamOpts.addStreamOpts('#ManOnGround', testCallback);
      expect(StreamOpts.optsArray[0]).to.be.an('object');
      expect(StreamOpts.optsArray[0] instanceof StreamOpts) .to.eql(true);
      expect(StreamOpts.optsArray[1].searchString).to.eql('#ManOnGround');
      expect(StreamOpts.optsArray[1].type).to.eql('hashtag');
      expect(StreamOpts.optsArray[1].callback).to.be.a('function');
      expect(StreamOpts.optsArray[1].callback('arr2')).to.eql('arr2!');
      done();
    });
    it('should have left the first object in the array intact', function(done) {
      StreamOpts.addStreamOpts('@fakedansavage', testCallback);
      expect(StreamOpts.optsArray[0]).to.be.an('object');
      expect(StreamOpts.optsArray[0] instanceof StreamOpts).to.eql(true);
      expect(StreamOpts.optsArray[0].searchString).to.eql('@fakedansavage');
      expect(StreamOpts.optsArray[0].type).to.eql('mention');
      expect(StreamOpts.optsArray[0].callback).to.be.a('function');
      expect(StreamOpts.optsArray[0].callback('arr1')).to.eql('arr1!');
      done();
    });
  });

});
