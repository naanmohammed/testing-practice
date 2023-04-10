function capitalize(string) {
    if (string.length > 0) {
      return string[0].toUpperCase() + string.slice(1);
    } else {
      return string;
    }
  };
  module.exports = capitalize;