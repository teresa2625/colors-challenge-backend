class RGBStrategy {
  generateRGB() {
    return {
      type: "rgb",
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    };
  }
}

module.exports = RGBStrategy;
