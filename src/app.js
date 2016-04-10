var fs = require('fs');
var setWordCode = require('./setWordCode');

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
  var matches = '';

  var match = dictionaryWords.filter(function (element) {
    return element.code == wordCode;
  });

  dictionaryWords.forEach(function (word) {
    if (word.code == wordCode)
      matches == '' ? matches += word.word : matches += ', ' + word.word;
  });

  if (matches == '')
    return console.log(word + ' (' + wordCode + ')' + ' - There\'s no matches for this word.');

  console.log(word + ' (' + wordCode + ')' + ' - ' + matches);
});
