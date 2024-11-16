const { sendSuccess, sendError } = require("../../utils/responseHelper");

describe("sendSuccess", () => {
  let res;

  beforeEach(() => {
    res = {
      statusCode: null,
      end: jest.fn(),
    };
  });

  test("should set statusCode to 200 and send success response", () => {
    const data = { test: "data" };
    const message = "Request successful";

    sendSuccess(res, data, message);

    expect(res.statusCode).toBe(200);

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        success: true,
        message: message,
        data: data,
      }),
    );
  });

  test("should use default message if no message is provided", () => {
    const data = { test: "data" };

    sendSuccess(res, data);

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        success: true,
        message: "Request successful",
        data: data,
      }),
    );
  });
});

describe("sendError", () => {
  let res;

  beforeEach(() => {
    res = {
      statusCode: null,
      end: jest.fn(),
    };
  });

  test("should set statusCode to 500 and send error response with message", () => {
    const error = new Error("Something went wrong");
    const message = "An error occurred";

    sendError(res, error, message);

    expect(res.statusCode).toBe(500);

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        success: false,
        message: message,
        error: "Something went wrong",
      }),
    );
  });

  test("should handle error object without message", () => {
    const error = new Error();
    const message = "An error occurred";

    sendError(res, error, message);

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        success: false,
        message: message,
        error: {},
      }),
    );
  });

  test("should use default message if no message is provided", () => {
    const error = new Error("Something went wrong");

    sendError(res, error);

    expect(res.end).toHaveBeenCalledWith(
      JSON.stringify({
        success: false,
        message: "An error occurred",
        error: "Something went wrong",
      }),
    );
  });
});
