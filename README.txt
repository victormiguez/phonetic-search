To run the application you must have Nodejs installed on your machine, then go to the application folder and run:
"npm start your random words"
or
"node src/app.js your random words"
It will always look for a file called "dictionary.txt" to make the comparsions. Every word that you want to test must be added inside this file.

Running tests

You must install Mocha globaly:
"npm install -g mocha"

Then install the other project dependencies:
"npm install"

After this, run:
"npm test"

References:
https://en.wikipedia.org/wiki/Soundex
http://www.devmedia.com.br/introducao-ao-algoritmo-fonetico-soundex/28432
