var config = require('./config');

function setWordCode (word) {
  if (!word) {
    throw new Error('Please, give me at least one word');
    process.exit();
  }

  var groupKeys = Object.keys(config.groups),
    splittedWord = word.toUpperCase().replace(/[^A-Z]/g, '').split(''),
    firstLetter = splittedWord.splice(0, 1),
    splittedWordLength = splittedWord.length,
    lastLetterCode = '',
    code = '';

  groupKeys.forEach(function (group, index) {
    var groupCode = config.groups[group];

    group.indexOf(firstLetter) > -1 ? firstLetter = config.groups[group] : firstLetter = firstLetter;
  });

  for (var i = 0; i < splittedWordLength; i++) {
    var currentLetter = splittedWord[i],
      isValidLetter = config.validLetters.indexOf(currentLetter) > -1;

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
