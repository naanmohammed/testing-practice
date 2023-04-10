const reverseString = require('./reverseString')

test('reverses a simple string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  
  test('reverses a string with spaces and punctuation', () => {
    expect(reverseString('Hello, world!')).toBe('!dlrow ,olleH');
  });
  