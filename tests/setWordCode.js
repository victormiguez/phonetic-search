var chai = require('chai');
var expect = chai.expect;
var setWordCode = require('../src/setWordCode');

describe('setWordCode with parameter', function() {
  it('setWordCode should transform a word into code numbers', function() {
    var wordCode = setWordCode('Tom');
    expect(wordCode).to.equal('4-5');
  });
});

describe('setWordCode without parameter', function() {
  it('setWordCode should throw an error if there is no words', function() {
    expect(setWordCode).to.throw(Error);
  });
});
