const {
    rowAndNumberChecker,
    getRowNumber,
    checkSeatStatus,
    book,
} = require('../homework');

describe('rowAndNumberChecker', () => {
    it('should return 2 if the letter given is a C', () => {
        expect(getRowNumber('C')).toBe(2);
    });
    it('should throw an TypeError if first parameter is not a letter', () => {
        expect(() => getRowNumber(3)).toThrow(TypeError);
    });
    it('should throw an TypeError if first parameter is empty', () => {
        expect(() => getRowNumber('')).toThrow(TypeError);
    });
    it('should throw an TypeError if first parameter is more than one letter', () => {
        expect(() => getRowNumber('AB')).toThrow(TypeError);
    });
});

describe('checkSeatStatus', () => {
    it('checkSeatStatus is a function', () => {
        expect(typeof checkSeatStatus).toBe('function');
    });
    it('should return true if the given seat defined by row and column is booked', () => {
        expect(checkSeatStatus('A', 1)).toBe(true);
    });
    it('should return false if the given seat defined by row and column is not booked', () => {
        expect(checkSeatStatus('E', 3)).toBe(false);
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
  






  

  

  