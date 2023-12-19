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

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

app.get('/strings/hello/world', practiceHello);

app.get('/strings/hello/:string', sayingHello);

app.get('/strings/upper/:string', toUpperCase);

app.get('/strings/lower/:string', toLowerCase);

app.get('/strings/first-character/:string', getFirstCharacter);

app.get('/strings/count-characters/:string', countingCharacters);

app.get('/strings/first-characters/:string', getFirstCharacters);

app.get('/numbers/add/:num1/and/:num2', addNumbers);

app.get('/numbers/subtract/:num2/from/:num1', subtractNumbers);

app.post('/numbers/multiply', multiplyNumbers);

app.post('/numbers/divide', divideNumbers);

app.post('/numbers/remainder', remainderOfNumbers);

app.post('/arrays/element-at-index/:index', getElement);

app.post('/arrays/to-string', arrayToString);

app.post('/arrays/append', addingToArray);

app.post('/arrays/starts-with-vowel', startsWithVowel);

app.post('/arrays/remove-element', removeElement);

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:num', (req, res) => {
  const number = parseInt(req.params.num, 10);
  if (Number.isNaN(number)) {
    return res.status(400).send({ error: 'Parameter must be a number.' });
  }
  return res.status(200).send({ result: isOdd(number) });
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  if (req.params.char.length > 1) {
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).send({ result: startsWith(req.params.char, req.params.string) });
});

module.exports = app;
