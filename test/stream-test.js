'use strict';

let chai = require('chai');
let expect = chai.expect;

let Twit = require('twit');
let testKeys = require(__dirname + '/../config/config.js');
let twit = new Twit(testKeys);
let lib = {};
require(__dirname + '/../lib')(twit, lib);
let StreamOpts = lib.StreamOpts;
console.log(lib);
let testCallback = function(input) {
  return input + '!';
};

describe('constStream.js', function() {
  describe('StreamOpts constructor', function() {
    it('should create a new text StreamOpts object', function() {
      var plainOpts = new StreamOpts('test', testCallback);
      expect(plainOpts).to.be.an('object');
      expect(plainOpts.searchString).to.eql('test');
      expect(plainOpts.type).to.eql('text');
      expect(plainOpts.callback).to.be.a('function');
      expect(plainOpts.callback('plain')).to.eql('plain!');
    });
    it('should remove spaces after commas in a new text StreamOpts object', function() {
      var commaSpaceOpts = new StreamOpts('Girl,   Interrupted', testCallback);
      expect(commaSpaceOpts).to.be.an('object');
      expect(commaSpaceOpts.searchString).to.eql('Girl,Interrupted');
      expect(commaSpaceOpts.type).to.eql('text');
      expect(commaSpaceOpts.callback).to.be.a('function');
      expect(commaSpaceOpts.callback('comma')).to.eql('comma!');
    });
    it('should create a new mention StreamOpts object', function() {
      var mentionOpts = new StreamOpts('@name', testCallback);
      expect(mentionOpts).to.be.an('object');
      expect(mentionOpts.searchString).to.eql('@name');
      expect(mentionOpts.type).to.eql('mention');
      expect(mentionOpts.callback).to.be.a('function');
      expect(mentionOpts.callback('mention')).to.eql('mention!');
    });
    it('should create a new hashtag StreamOpts object', function() {
      var hashtagOpts = new StreamOpts('#tag', testCallback);
      expect(hashtagOpts).to.be.an('object');
      expect(hashtagOpts.searchString).to.eql('#tag');
      expect(hashtagOpts.type).to.eql('hashtag');
      expect(hashtagOpts.callback).to.be.a('function');
      expect(hashtagOpts.callback('hashtag')).to.eql('hashtag!');
    });

  });

});
