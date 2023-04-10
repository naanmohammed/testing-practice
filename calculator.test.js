describe('Calculator', () => {
    let Calculator = require('./calculator')
    Calculator = new Calculator();
  
    describe('add', () => {
      test('adds two positive numbers', () => {
        expect(Calculator.add(2, 3)).toBe(5);
      });
  
      test('adds two negative numbers', () => {
        expect(Calculator.add(-5, -3)).toBe(-8);
      });
  
      test('adds a positive and a negative number', () => {
        expect(Calculator.add(7, -2)).toBe(5);
      });
    });
  
    describe('subtract', () => {
      test('subtracts a smaller number from a larger one', () => {
        expect(Calculator.subtract(10, 4)).toBe(6);
      });
  
      test('subtracts a larger number from a smaller one', () => {
        expect(Calculator.subtract(4, 10)).toBe(-6);
      });
  
      test('subtracts a negative number from a positive one', () => {
        expect(Calculator.subtract(8, -3)).toBe(11);
      });
    });
  
    describe('multiply', () => {
      test('multiplies two positive numbers', () => {
        expect(Calculator.multiply(2, 3)).toBe(6);
      });
  
      test('multiplies two negative numbers', () => {
        expect(Calculator.multiply(-5, -3)).toBe(15);
      });
  
      test('multiplies a positive and a negative number', () => {
        expect(Calculator.multiply(7, -2)).toBe(-14);
      });
    });
  
    describe('divide', () => {
      test('divides a larger number by a smaller one', () => {
        expect(Calculator.divide(10, 2)).toBe(5);
      });
  
      test('divides a smaller number by a larger one', () => {
        expect(Calculator.divide(4, 10)).toBe(0.4);
      });
  
      test('throws an error when dividing by zero', () => {
        expect(() => Calculator.divide(5, 0)).toThrow('Cannot divide by zero');
      });
    });
  });
  