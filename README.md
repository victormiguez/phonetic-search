# Phonetic Search
The algorithm decides if a word is phonetically equivalent.
This follow this steps:

1. Every non alphabetical character is ignored
2. It must not differ upper to lower cases;
3. After the first letter, any of the following letter must be ignored: A, E, I, H, O, U, W, Y.
4. The following groups of letter are considered equivalent:
  - AEIOU
  - CGJKQSXYZ
  - BFPVW
  - DT
  - M
  - There's no equivalent for any other character
5. Any consecutive equivalent letter (after be ignored on the step 3) are considered as a single occurance.

## Running the project
```
npm start your random words
```
Or
```
node src/app.js your random words
```
It will always look for a file called "dictionary.txt" to make the comparsions. Every word that you want to test must be added inside this file.

## Running tests
You must install Mocha globaly:
```
npm install -g mocha
```
Then install the other project dependencies:
```
npm install
```
After this, run:
```
npm test
```


## References
[Wikipedia - Soundex](https://en.wikipedia.org/wiki/Soundex)

[Introdução ao Algoritmo Fonético Soundex](http://www.devmedia.com.br/introducao-ao-algoritmo-fonetico-soundex/28432)
