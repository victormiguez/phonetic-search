function matchWords (word, wordCode, dictionaryWords) {
  var matches = '';

  dictionaryWords.forEach(function (word) {
    if (word.code == wordCode)
      matches == '' ? matches += word.word : matches += ', ' + word.word;
  });

  return matches;
};

module.exports = matchWords;
