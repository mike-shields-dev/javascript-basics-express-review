const { negate, truthiness, isOdd, startsWith } = require('../lib/booleans');

const negateIt = (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
};

const isTruthy = (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
};

const isOddNum = (req, res) => {
  const number = parseInt(req.params.num, 10);
  if (Number.isNaN(number)) {
    return res.status(400).send({ error: 'Parameter must be a number.' });
  }
  return res.status(200).send({ result: isOdd(number) });
};

const startsWithChar = (req, res) => {
  if (req.params.char.length > 1) {
    return res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  return res.status(200).send({ result: startsWith(req.params.char, req.params.string) });
};

module.exports = { negateIt, isTruthy, isOddNum, startsWithChar };
