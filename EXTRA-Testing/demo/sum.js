function sum(a, b) {
  if (typeof a !== 'number') throw new TypeError('First parameter is not a number.');
  if (typeof b !== 'number') throw new TypeError('Second parameter is not a number.');
  return a + b;
}

module.exports = sum;