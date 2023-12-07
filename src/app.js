const express = require('express');

const app = express();

const stringFunc = require('./lib/strings');

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

module.exports = app;
