var config = require('./config');

function setWordCode (word) {
  if (!word) {
    throw 'Please, give me at least one word';
    process.exit();
  }

  var groupKeys = Object.keys(config.groups),
    splittedWord = word.toUpperCase().replace(/[^A-Z]/g, '').split(''),
    firstLetter = splittedWord.splice(0, 1),
    splittedWordLength = splittedWord.length,
    lastLetterCode = '',
    code = '';

  for (var i = 0; i < splittedWordLength; i++) {
    var currentLetter = splittedWord[i];
    var isValidLetter = config.validLetters.indexOf(currentLetter) > -1;

    if (!isValidLetter)
      continue;

    if (isValidLetter) {
      groupKeys.forEach(function (group, index) {
        var groupCode = config.groups[group];

        if (group.indexOf(currentLetter) > -1 && lastLetterCode != groupCode) {
          lastLetterCode = groupCode;
          code += groupCode;
        }
      });
    }
  }

  return firstLetter + '-' + code;
}

module.exports = setWordCode;
