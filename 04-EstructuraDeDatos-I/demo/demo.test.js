'use strict'

const {
    BinarioADecimal,
    DecimalABinario,
    reverseString,
    twoStrings,
} = require('./demo.js')

describe('BinarioADecimal(num)', function() {
    it('should return 2', function() {
      expect(BinarioADecimal('10')).toBe(2);
    });
    it('should return 7', function() {
      expect(BinarioADecimal('111')).toBe(7);
    });
});
  
describe('DecimalABinario(num)', function() {
    it('should return "100"', function() {
      expect(DecimalABinario(4)).toBe('100');
    });
    it('should return "111"', function() {
      expect(DecimalABinario(7)).toBe('111');
    });
});

describe('reverseString(string)', function() {
  it('should return the string "Hello" reversed', function() {
    expect(reverseString('Hello')).toBe('olleH');
  });
  it('should return the string "Bye" reversed', function() {
    expect(reverseString('Bye')).toBe('eyB');
  });
});

describe('twoStrings(string, letter)', function() {
  it('should return "Javascript", "a" => 2', function() {
    expect(twoStrings('Javascript', 'a')).toBe(2);
  });
  it('should return "FullStack", "l" => 2', function() {
    expect(twoStrings('FullStack', 'l')).toBe(2);
  });
});