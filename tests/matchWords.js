var chai = require('chai');
var expect = chai.expect;
var matchWords = require('../src/matchWords');
var setWordCode = require('../src/setWordCode');
var dictionaryWords =
  [ { word: 'ANGEL', code: '1-52' },
  { word: 'BRAVE', code: '3-3' },
  { word: 'BRAEV', code: '3-3' },
  { word: 'DON', code: '4-5' },
  { word: 'ENGEL', code: '1-52' },
  { word: 'GO', code: '2-' },
  { word: 'GOAL', code: '2-' },
  { word: 'SON', code: '2-5' },
  { word: 'SUNNY', code: '2-5' },
  { word: 'TOM', code: '4-5' },
  { word: 'TOOONNNNYYYY', code: '4-5' }];

describe('matchWords', function() {
  it('matchWords should match phonetic equivalent words', function() {

    var word = 'Angel';
    var wordCode = setWordCode(word);
    var matches = matchWords(word, wordCode, dictionaryWords);

    expect(matches).to.equal('ANGEL, ENGEL');
  });
});

describe('matchWords', function() {
  it('setWordCode should match phonetic equivalent words', function() {

    var word = '1Ton#';
    var wordCode = setWordCode(word);
    var matches = matchWords(word, wordCode, dictionaryWords);

    expect(matches).to.equal('DON, TOM, TOOONNNNYYYY');
  });
});

describe('matchWords', function() {
  it('setWordCode should return empty if there is no match', function() {

    var word = 'Love';
    var wordCode = setWordCode(word);
    var matches = matchWords(word, wordCode, dictionaryWords);

    expect(matches).to.equal('');
  });
});
