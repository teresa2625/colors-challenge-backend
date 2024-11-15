class BRGBStrategy {
  generateBRGB() {
    return {
      type: "brgb",
      red: Math.floor(Math.random() * 10001),
      green: Math.floor(Math.random() * 10001),
      blue: Math.floor(Math.random() * 10001),
    };
  }
}

module.exports = BRGBStrategy();
