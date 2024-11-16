const HSLStrategy = require("../../strategies/HSLStrategy");

describe("HSLStrategy", () => {
  let hslStrategy;

  beforeEach(() => {
    hslStrategy = new HSLStrategy();
  });

  test('should generate an object with type "hsl" and valid hue, saturation, and lightness values', () => {
    const color = hslStrategy.generateHSL();

    expect(color).toHaveProperty("type", "hsl");

    expect(color.hue).toBeGreaterThanOrEqual(0);
    expect(color.hue).toBeLessThanOrEqual(360);

    expect(color.saturation).toBeGreaterThanOrEqual(0);
    expect(color.saturation).toBeLessThanOrEqual(100);

    expect(color.lightness).toBeGreaterThanOrEqual(0);
    expect(color.lightness).toBeLessThanOrEqual(100);
  });

  test("should generate different colors on each call", () => {
    const color1 = hslStrategy.generateHSL();
    const color2 = hslStrategy.generateHSL();

    expect(color1).not.toEqual(color2);
  });
});
