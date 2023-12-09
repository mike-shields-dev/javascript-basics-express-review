const express = require('express');

const app = express();

app.use(express.json());

const stringFunc = require('./lib/strings');
const numberFunc = require('./lib/numbers');

app.get('/strings/hello/world', (req, res) => {
  res.status(200).send({ result: 'Hello, world!' });
});

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).send({ result: stringFunc.sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).send({ result: stringFunc.uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).send({ result: stringFunc.lowercase(req.params.string) });
});

app.get('/strings/first-character/:string', (req, res) => {
  res.status(200).send({ result: stringFunc.firstCharacter(req.params.string) });
});

app.get('/strings/count-characters/:string', (req, res) => {
  res.status(200).send({ result: stringFunc.countCharacters(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: stringFunc.firstCharacters(req.params.string, req.query.length) });
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: numberFunc.add(a, b) });
});

app.get('/numbers/subtract/:num2/from/:num1', (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: numberFunc.subtract(a, b) });
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
  return res.status(200).send({ result: numberFunc.multiply(a, b) });
});

app.post('/numbers/divide', (req, res) => {
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  res.status(200).send({ result: numberFunc.divide(a, b) });
});

module.exports = app;
