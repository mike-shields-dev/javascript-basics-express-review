const express = require('express');

const app = express();

app.use(express.json());

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('./lib/strings');
const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');
const {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter,
} = require('./lib/arrays');

app.get('/strings/hello/world', (req, res) => {
  res.status(200).send({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.status(200).send({ result: firstCharacter(req.params.string) });
});

app.get('/strings/count-characters/:string', (req, res) => {
  res.status(200).send({ result: countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: add(a, b) });
});

app.get('/numbers/subtract/:num2/from/:num1', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: subtract(a, b) });
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).send({ result: multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (a === 0) {
    return res.status(200).send({ result: divide(a, b) });
  }
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).send({ result: divide(a, b) });
});

app.post('/numbers/remainder', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (a === 0) {
    return res.status(200).send({ result: remainder(a, b) });
  }
  if (b === 0) {
    return res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: remainder(a, b) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  return res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  return res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

app.post('/arrays/append', (req, res) => {
  return res.status(200).send({ result: addToArray2(req.body.value, req.body.array) });
});

app.post('/arrays/starts-with-vowel', (req, res) => {
  return res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
});

app.post('/arrays/remove-element', (req, res) => {
  const index = parseInt(req.query.index, 10) || 0;
  return res.status(200).send({ result: removeNthElement2(index, req.body.array) });
});

module.exports = app;
