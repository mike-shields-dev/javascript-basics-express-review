const express = require('express');

const app = express();

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

module.exports = app;
