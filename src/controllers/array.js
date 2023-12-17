const {
  getNthElement,
  arrayToCSVString,
  addToArray2,
  removeNthElement2,
  elementsStartingWithAVowel,
} = require('../lib/arrays');

const arrayToString = (req, res) => {
  return res.status(200).send({ result: arrayToCSVString(req.body.array) });
};

const getElement = (req, res) => {
  return res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
};

const addingToArray = (req, res) => {
  return res.status(200).send({ result: addToArray2(req.body.value, req.body.array) });
};

const startsWithVowel = (req, res) => {
  return res.status(200).send({ result: elementsStartingWithAVowel(req.body.array) });
};

const removeElement = (req, res) => {
  const index = parseInt(req.query.index, 10) || 0;
  return res.status(200).send({ result: removeNthElement2(index, req.body.array) });
};

module.exports = { arrayToString, getElement, addingToArray, startsWithVowel, removeElement };
