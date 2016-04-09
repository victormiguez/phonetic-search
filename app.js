var fs = require('fs');

fs.readFile('./dictionary.txt', 'utf8', function (err, data) {
  if (err) return console.error(err);
  var dictionary = data.trim().split('\r\n');
  console.log(dictionary);
});

var validLetters = ['A', 'E', 'I', 'O', 'U', 'C', 'G', 'J', 'K', 'Q', 'S', 'X', 'Y', 'Z', 'B', 'F', 'P', 'V', 'W', 'D', 'T', 'M', 'N'];
var invalidLetters = ['A','E','I','H','O','U','W', 'Y'];

var groups = [
  {
    value: 0,
    letters: ['A', 'E', 'I', 'O', 'U']
  }, {
    value: 1,
    letters: ['C', 'G', 'J', 'K', 'Q', 'S', 'X', 'Y', 'Z']
  }, {
    value: 2,
    letters: ['B', 'F', 'P', 'V', 'W']
  }, {
    value: 3,
    letters: ['D', 'T']
  }, {
    value: 4,
    letters: ['M', 'N']
  }
];

var arguments = process.argv;
arguments.splice(0, 2);

arguments.forEach(function (word, index) {
  // This regex remove any non alphabetic digit
  word = word.replace(/[^a-z]/gi, '');

  var validWord = [];
  var code = '';
  var splittedWord = word.toUpperCase().split('');
  var firstLetter = splittedWord.splice(0, 1);
  var splittedWordLength = splittedWord.length;
  var lastLetter;

  console.log('------------');
  console.log(splittedWord);

  for (var i = 0; i < splittedWordLength; i++) {
    var currentLetter = splittedWord[i];
    var isInvalidLetter = invalidLetters.indexOf(currentLetter) > -1;

    if (isInvalidLetter || currentLetter == lastLetter)
      continue;

    var isValidLetter = validLetters.indexOf(currentLetter) > -1;
    if (isValidLetter)
      validWord.push(currentLetter);

    lastLetter = currentLetter;
  }

  for (var i = 0; i < validWord.length; i++) {
    groups.forEach(function (group, index) {
      if (group.letters.indexOf(validWord[i]) > -1)
        code += index.toString();
    });
  }

  console.log(firstLetter + '-' + code);
  console.log('------------');
});
