const stringLength = require('./stringLength.js')
describe("stringLength", () => {
    it("returns the length of a string", () => {
      expect(stringLength("")).toBe(0);
      expect(stringLength("a")).toBe(1);
      expect(stringLength("hello")).toBe(5);
      expect(stringLength("This is a sentence.")).toBe(19);
    });
  });

  test('stringLength throws error if string is too short', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long');
  });
  
  test('stringLength throws error if string is too long', () => {
    expect(() => stringLength('This is a long string')).toThrow('String cannot be longer than 10 characters');
  });
  
  test('stringLength returns correct length of valid string', () => {
    expect(stringLength('Valid')).toBe(5);
  });
  
  test('stringLength returns correct length of 10-character string', () => {
    expect(stringLength('Exactly 10')).toBe(10);
  });
  
  test('stringLength does not accept undefined or null values', () => {
    expect(() => stringLength(undefined)).toThrow(TypeError);
    expect(() => stringLength(null)).toThrow(TypeError);
  });
  