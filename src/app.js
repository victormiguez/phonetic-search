var fs = require('fs');
var setWordCode = require('./setWordCode');
var matchWords = require('./matchWords');

var data;
try {
  data = fs.readFileSync('./dictionary.txt', 'utf8').toUpperCase().split('\r\n');
} catch (e) {
  console.error('Error! I\'m unable to read your dictionary.txt');
  process.exit();
}

var dictionaryWords = [];

data.forEach(function (word) {
  var wordCode = setWordCode(word);
  dictionaryWords.push({
    word: word,
    code: wordCode
  });
});

var arguments = process.argv;
arguments.splice(0, 2);

arguments.forEach(function (word) {
  var wordCode = setWordCode(word);

  var matches = matchWords(word, wordCode, dictionaryWords);

  if (matches == '')
    return console.log(word + ' (' + wordCode + ')' + ' - There\'s no matches for this word.');

  console.log(word + ' (' + wordCode + ')' + ' - ' + matches);
});
