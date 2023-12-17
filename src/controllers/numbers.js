const { add, subtract, multiply, divide, remainder } = require('../lib/numbers');

const addNumbers = (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: add(a, b) });
};

const subtractNumbers = (req, res) => {
  const a = parseInt(req.params.num1, 10);
  const b = parseInt(req.params.num2, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  return res.status(200).send({ result: subtract(a, b) });
};

const multiplyNumbers = (req, res) => {
  if (!req.body.a || !req.body.b) {
    return res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  const a = parseInt(req.body.a, 10);
  const b = parseInt(req.body.b, 10);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  return res.status(200).send({ result: multiply(a, b) });
};

const divideNumbers = (req, res) => {
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
};

const remainderOfNumbers = (req, res) => {
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
};

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  remainderOfNumbers,
};
