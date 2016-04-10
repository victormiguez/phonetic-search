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
console.log(dictionaryWords);

var arguments = process.argv;
arguments.splice(0, 2);

  console.log('------------');
  console.log('------------');
  console.log('------------');
  console.log('------------');

arguments.forEach(function (word) {

  var wordCode = setWordCode(word);

  console.log(wordCode);
  console.log('------------');
});
