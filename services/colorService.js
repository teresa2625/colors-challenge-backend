const RGBStrategy = require("../strategies/RGBStrategy");
const HSLStrategy = require("../strategies/HSLStrategy");
const path = require("path");
const fs = require("fs");

class ColorService {
  static generateRandomColors() {
    const rgbStrategy = new RGBStrategy();
    const hslStrategy = new HSLStrategy();
    const swatches = [];

    for (let i = 0; i < 5; i++) {
      const colorType = Math.floor(Math.random() * 2);
      if (colorType === 0) {
        swatches.push(rgbStrategy.generateRGB());
      } else {
        swatches.push(hslStrategy.generateHSL());
      }
    }
    return swatches;
  }
  static addColorStrategy(strategyData) {
    const strategiesFolder = path.join(__dirname, "../strategies/");
    const strategyFile = path.join(
      strategiesFolder,
      `${strategyData.name.toUpperCase()}Strategy.js`,
    );

    if (fs.existsSync(strategyFile)) {
      throw new Error("Strategy already exists!");
    }

    const strategyRGBTemplate = `
class ${strategyData.name.toUpperCase()}Strategy {
  generate${strategyData.name.toUpperCase()}() {
    return { 
    type: "${strategyData.colorSpace.toLowerCase()}", 
    red:Math.floor(Math.random() * (redMax - redMin + 1)) + redMin,
    green: Math.floor(Math.random() * (greenMax - greenMin + 1)) + greenMin,
    blue: Math.floor(Math.random() * (blueMax - blueMin + 1)) + blueMin, };
  }
}
module.exports = ${strategyData.name.toUpperCase()}Strategy;`;

    fs.writeFileSync(strategyFile, strategyRGBTemplate);

    return {
      message: `${strategyData.name.toUpperCase()}Strategy added successfully.`,
    };
  }
}

module.exports = ColorService;
