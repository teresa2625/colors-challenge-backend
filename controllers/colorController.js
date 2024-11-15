const { sendSuccess, sendError } = require("../utils/responseHelper");
const ColorService = require("../services/colorService");

const getColorSwatches = (req, res) => {
  try {
    const colors = ColorService.generateRandomColors();
    sendSuccess(res, colors);
  } catch (error) {
    sendError(res, error);
  }
};

const colorStrategy = async (strategyData, res) => {
  try {
    const response = await ColorService.addColorStrategy(strategyData);
    console.log("response", response);
    sendSuccess(res);
  } catch (error) {
    sendError(res, error);
  }
};

module.exports = { getColorSwatches, colorStrategy };
