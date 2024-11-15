const RGBStrategy = require("../strategies/rgbStrategy");
const HSLStrategy = require("../strategies/hslStrategy");

class ColorService {
  static generateRandomColors() {
    const rgbStrategy = new RGBStrategy();
    const hslStrategy = new HSLStrategy();
    const swatches = [];

    for (let i = 0; i < 5; i++) {
      const colorType = Math.random() > 0.5 ? "rgb" : "hsl";
      if (colorType === "rgb") {
        swatches.push(rgbStrategy.generateRGB());
      } else {
        swatches.push(hslStrategy.generateHSL());
      }
    }
    return swatches;
  }
}

module.exports = ColorService;
