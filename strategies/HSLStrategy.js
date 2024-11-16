class HSLStrategy {
  generateHSL() {
    return {
      type: "hsl",
      hue: Math.floor(Math.random() * 360),
      saturation: Math.floor(Math.random() * 101),
      lightness: Math.floor(Math.random() * 101),
    };
  }
}

module.exports = HSLStrategy;
