const {
  checkNumber,
  checkString,
  checkObject,
  checkArray,
  toBeNull,
  toBeUndefined,
} = require('./matchers');

describe('Tests that will pass', () => {
  it('should pass if exact match number', () => {
    expect(checkNumber(3)).toBe(3);
  });
  it('should pass if exact match string', () => {
    expect(checkString('Franco')).toBe('Franco');
  });
});

describe('Tests that will not pass', () => {
  it('should fail if not exact match (object)', () => {
    expect(checkObject({name: 'Franco', age: 27})).toEqual({name: 'Franco', age: 27});
  });
  it('should fail if not exact match (array)', () => {
    expect(checkArray([1,2,3,4,5])).toEqual([1,2,3,4,5]);
  });
})

describe('Extra matchers', () => {
    it('toBeNull', () => {
      expect(toBeNull(null)).toBeNull();
    });
    it('toBeUndefined', () => {
      expect(toBeUndefined(undefined)).toBeUndefined();
    });
    it('toBeDefined', () => {
      expect(2).toBeDefined();
      expect(0).toBeDefined();
      expect('').toBeDefined();
      expect('Franco').toBeDefined();
      expect([]).toBeDefined();
      expect([1,2,3]).toBeDefined();
      expect({}).toBeDefined();
      expect({a: 1}).toBeDefined();
      expect(null).toBeDefined();
      expect(undefined).not.toBeDefined();
    });
    it('toBeTruthy', () => {
      expect(true).toBeTruthy();
      expect(2).toBeTruthy();
      expect('Franco').toBeTruthy();
      expect([]).toBeTruthy();
      expect([1,2,3]).toBeTruthy();
      expect({}).toBeTruthy();
      expect({a: 1}).toBeTruthy();
      expect(0).not.toBeTruthy();
      expect('').not.toBeTruthy();
      expect(undefined).not.toBeTruthy();
      expect(null).not.toBeTruthy();
    });
    it('toBeCloseTo', () => {
      expect(0.1 + 0.2).toBeCloseTo(0.3);
      // expect(0.11).toBeCloseTo(0.1);
      expect(0.11).toBeCloseTo(0.1, 1);
      expect(0.174927142).toBeCloseTo(0.17492, 4);
    });
    it('toMatch', () => {
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch('Franco');
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/Franco/);
      expect('Un texto largo que tiene Franco dentro de sus palabras').toMatch(/palabras$/);
    });
    it('toContain', () => {
      const array = ['Franco', 'Toni', 'Martu', 'Mati'];
      expect(array).toContain('Martu');
      expect(array).not.toContain('Diego');
      expect('Soy Henry').toContain('Henry');
    });
    // also used as .toThrowError
    it('toThrow', () => {
      function error() {throw new TypeError('An error');}
      // function definition, not executed!
      expect(error).toThrow();
      expect(error).toThrow('An error');
      // expect(error).toThrow('An errorrrrs');
      expect(error).toThrow('error');
      expect(error).toThrow(/error$/);
      expect(error).toThrow(TypeError);
      // expect(error).toThrow(SyntaxError);
      expect(error).toThrow(new TypeError('An error'));
    });
});