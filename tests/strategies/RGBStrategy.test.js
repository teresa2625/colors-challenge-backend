const RGBStrategy = require("../../strategies/RGBStrategy");

describe("RGBStrategy", () => {
  let rgbStrategy;

  beforeEach(() => {
    rgbStrategy = new RGBStrategy();
  });

  test('should generate an object with type "rgb" and valid red, green, and blue values', () => {
    const color = rgbStrategy.generateRGB();

    expect(color).toHaveProperty("type", "rgb");

    expect(color.red).toBeGreaterThanOrEqual(0);
    expect(color.red).toBeLessThanOrEqual(255);
    expect(color.green).toBeGreaterThanOrEqual(0);
    expect(color.green).toBeLessThanOrEqual(255);
    expect(color.blue).toBeGreaterThanOrEqual(0);
    expect(color.blue).toBeLessThanOrEqual(255);
  });

  test("should generate different colors on each call", () => {
    const color1 = rgbStrategy.generateRGB();
    const color2 = rgbStrategy.generateRGB();

    expect(color1).not.toEqual(color2);
  });
});
