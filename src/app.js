var fs = require('fs');
var setWordCode = require('./setWordCode');
var matchWords = require('./matchWords');

var data;
try {
  data = fs.readFileSync('./dictionary.txt', 'utf8').toUpperCase().split('\r\n');
} catch (err) {
  throw new Error('Error! Unable to read your dictionary.txt');
  process.exit();
}

var dictionaryWords = data.map(function (word) {
  var wordCode = setWordCode(word);

  return {
    word: word,
    code: wordCode
  };
});

var arguments = process.argv;
arguments.splice(0, 2);

arguments.forEach(function (word) {
  var wordCode = setWordCode(word),
    matches = matchWords(word, wordCode, dictionaryWords);

  if (matches == '')
    return console.log(word + ' (' + wordCode + ')' + ' - There\'s no matches for this word.');

  console.log(word + ' (' + wordCode + ')' + ' - ' + matches);
});
