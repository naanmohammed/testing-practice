describe("capitalize", () => {
    const capitalize = require('./capitalize')
    it("capitalizes the first letter of a string", () => {
      expect(capitalize("hello world")).toBe("Hello world");
      expect(capitalize("hELLO wORLD")).toBe("HELLO wORLD");
      expect(capitalize("123abc")).toBe("123abc");
      expect(capitalize("")).toBe("");
    });
  });
  