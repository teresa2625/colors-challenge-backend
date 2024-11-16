const ColorService = require("../../services/colorService");
const RGBStrategy = require("../../strategies/RGBStrategy");
const HSLStrategy = require("../../strategies/HSLStrategy");
const fs = require("fs");
const path = require("path");

jest.mock("../../strategies/RGBStrategy");
jest.mock("../../strategies/HSLStrategy");
jest.mock("fs");
jest.mock("path");

describe("ColorService", () => {
  describe("generateRandomColors", () => {
    it("should generate an array of random colors", () => {
      const mockGenerateRGB = jest
        .fn()
        .mockReturnValue({ type: "rgb", red: 255, green: 100, blue: 50 });
      const mockGenerateHSL = jest.fn().mockReturnValue({
        type: "hsl",
        hue: 240,
        saturation: 50,
        lightness: 60,
      });

      RGBStrategy.mockImplementation(() => {
        return { generateRGB: mockGenerateRGB };
      });
      HSLStrategy.mockImplementation(() => {
        return { generateHSL: mockGenerateHSL };
      });

      const result = ColorService.generateRandomColors();

      expect(result).toHaveLength(5);
      expect(result[0]).toHaveProperty("type");
      expect(["rgb", "hsl"]).toContain(result[0].type);
    });

    it("should call generateRGB and generateHSL methods", () => {
      const mockGenerateRGB = jest
        .fn()
        .mockReturnValue({ type: "rgb", red: 255, green: 100, blue: 50 });
      const mockGenerateHSL = jest.fn().mockReturnValue({
        type: "hsl",
        hue: 240,
        saturation: 50,
        lightness: 60,
      });

      RGBStrategy.mockImplementation(() => {
        return { generateRGB: mockGenerateRGB };
      });
      HSLStrategy.mockImplementation(() => {
        return { generateHSL: mockGenerateHSL };
      });

      ColorService.generateRandomColors();

      expect(mockGenerateRGB).toHaveBeenCalled();
      expect(mockGenerateHSL).toHaveBeenCalled();
    });
  });

  describe("addColorStrategy", () => {
    it("should add a new strategy file if it does not exist", () => {
      const strategyData = { name: "test", colorSpace: "RGB" };

      fs.existsSync.mockReturnValue(false);

      fs.writeFileSync.mockImplementation(() => {});

      const result = ColorService.addColorStrategy(strategyData);

      expect(result.message).toBe("TESTStrategy added successfully.");
      expect(fs.writeFileSync).toHaveBeenCalled();
    });

    it("should throw an error if the strategy file already exists", () => {
      const strategyData = { name: "test", colorSpace: "RGB" };

      fs.existsSync.mockReturnValue(true);

      expect(() => ColorService.addColorStrategy(strategyData)).toThrow(
        "Strategy already exists!",
      );
    });
  });
});
