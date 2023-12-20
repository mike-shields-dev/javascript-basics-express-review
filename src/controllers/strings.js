const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
  countCharacters,
} = require('../lib/strings');

const practiceHello = (req, res) => {
  res.status(200).send({ result: 'Hello, world!' });
};

const sayingHello = (req, res) => {
  res.status(200).send({ result: sayHello(req.params.string) });
};

const toUpperCase = (req, res) => {
  res.status(200).send({ result: uppercase(req.params.string) });
};

const toLowerCase = (req, res) => {
  res.status(200).send({ result: lowercase(req.params.string) });
};

const getFirstCharacter = (req, res) => {
  res.status(200).send({ result: firstCharacter(req.params.string) });
};

const countingCharacters = (req, res) => {
  res.status(200).send({ result: countCharacters(req.params.string) });
};

const getFirstCharacters = (req, res) => {
  res.status(200).json({ result: firstCharacters(req.params.string, req.query.length) });
};

module.exports = {
  practiceHello,
  sayingHello,
  toUpperCase,
  toLowerCase,
  getFirstCharacter,
  countingCharacters,
  getFirstCharacters,
};
