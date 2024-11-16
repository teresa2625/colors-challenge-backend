const {
  getColorSwatches,
  colorStrategy,
} = require("../../controllers/colorController");
const ColorService = require("../../services/colorService");
const responseHelper = require("../../utils/responseHelper");

jest.mock("../../services/colorService");
jest.mock("../../utils/responseHelper");

describe("ColorController", () => {
  let res;

  beforeEach(() => {
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };
  });

  describe("getColorSwatches", () => {
    it("should return color swatches successfully", async () => {
      const sampleColors = ["#FF5733", "#33FF57", "#3357FF"];
      ColorService.generateRandomColors.mockReturnValue(sampleColors);

      await getColorSwatches({}, res);

      expect(responseHelper.sendSuccess).toHaveBeenCalledWith(
        res,
        sampleColors,
      );
    });

    it("should handle errors and send an error response", async () => {
      const errorMessage = "Error generating colors";
      ColorService.generateRandomColors.mockImplementation(() => {
        throw new Error(errorMessage);
      });

      await getColorSwatches({}, res);

      expect(responseHelper.sendError).toHaveBeenCalledWith(
        res,
        expect.any(Error),
      );
    });
  });

  describe("colorStrategy", () => {
    it("should add a color strategy successfully", async () => {
      const strategyData = {
        colorSpace: "RGB",
        rgbRange: { min: 0, max: 255 },
      };
      ColorService.addColorStrategy.mockResolvedValue(
        "Strategy added successfully",
      );

      await colorStrategy(strategyData, res);

      expect(responseHelper.sendSuccess).toHaveBeenCalledWith(res);
    });

    it("should handle errors when adding a color strategy", async () => {
      const strategyData = {
        colorSpace: "RGB",
        rgbRange: { min: 0, max: 255 },
      };
      const errorMessage = "Error adding strategy";
      ColorService.addColorStrategy.mockRejectedValue(new Error(errorMessage));

      await colorStrategy(strategyData, res);

      expect(responseHelper.sendError).toHaveBeenCalledWith(
        res,
        expect.any(Error),
      );
    });
  });
});
