const {
    rowCheckerAndGetRowNumber,
    numberChecker,
    book,
} = require('../homework');

describe('rowCheckerAndGetRowNumber', () => {
    it('should throw an TypeError if first parameter is not a letter', () => {
        expect(() => rowCheckerAndGetRowNumber(3)).toThrow(TypeError);
    });
    it('should throw an TypeError if first parameter is empty', () => {
        expect(() => rowCheckerAndGetRowNumber('')).toThrow(TypeError);
    });
    it('should throw an TypeError if first parameter is more than one letter', () => {
        expect(() => rowCheckerAndGetRowNumber('AB')).toThrow(TypeError);
    });
    it('should throw an TypeError if first parameter is not an uppercase letter between A and E (inclusive)', () => {
        expect(() => rowCheckerAndGetRowNumber('G')).toThrow(TypeError);
    });
    it('should return 2 if the letter given is a C', () => {
        expect(rowCheckerAndGetRowNumber('C')).toBe(2);
    });
});

describe('numberChecker', () => {
    it('should throw an TypeError if second parameter is not a number', () => {
        expect(() => numberChecker('A')).toThrow(TypeError);
    });
    it('should throw an TypeError if second parameter is more than one number or it is negative', () => {
        expect(() => numberChecker(22)).toThrow(TypeError);
    });   
    it('should throw an TypeError if second parameter is a number that is not betweet 0 and 3 (inclusive)', () => {
        expect(() => numberChecker(6)).toThrow(TypeError);
    }); 
});

describe('book', () => {
    it('should return "Seat in XX successfully booked" if the given seat is not booked', () => {
        expect(book('E',3)).toBe('Seat in E3 successfully booked');
    });
    it('should return "Seat in XX is already booked" if the given seat is already booked', () => {
        expect(book('A',1)).toBe('Seat in A1 is already booked');
    });
});
  






  

  

  