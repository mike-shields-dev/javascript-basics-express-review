const express = require('express');

const app = express();

app.use(express.json());

const {
  arrayToString,
  getElement,
  addingToArray,
  startsWithVowel,
  removeElement,
} = require('./controllers/array');

const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  remainderOfNumbers,
} = require('./controllers/numbers');

const {
  practiceHello,
  sayingHello,
  toUpperCase,
  toLowerCase,
  getFirstCharacter,
  countingCharacters,
  getFirstCharacters,
} = require('./controllers/strings');

const { negateIt, isTruthy, isOddNum, startsWithChar } = require('./controllers/booleans');

// strings

app.get('/strings/hello/world', practiceHello);

app.get('/strings/hello/:string', sayingHello);

app.get('/strings/upper/:string', toUpperCase);

app.get('/strings/lower/:string', toLowerCase);

app.get('/strings/first-character/:string', getFirstCharacter);

app.get('/strings/count-characters/:string', countingCharacters);

app.get('/strings/first-characters/:string', getFirstCharacters);

// numbers

app.get('/numbers/add/:num1/and/:num2', addNumbers);

app.get('/numbers/subtract/:num2/from/:num1', subtractNumbers);

app.post('/numbers/multiply', multiplyNumbers);

app.post('/numbers/divide', divideNumbers);

app.post('/numbers/remainder', remainderOfNumbers);

// arrays

app.post('/arrays/element-at-index/:index', getElement);

app.post('/arrays/to-string', arrayToString);

app.post('/arrays/append', addingToArray);

app.post('/arrays/starts-with-vowel', startsWithVowel);

app.post('/arrays/remove-element', removeElement);

// booleans

app.post('/booleans/negate', negateIt);

app.post('/booleans/truthiness', isTruthy);

app.get('/booleans/is-odd/:num', isOddNum);

app.get('/booleans/:string/starts-with/:char', startsWithChar);

module.exports = app;
