const colorController = require("../controllers/colorController");

const colorRoutes = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }
  if (req.url === "/api/colors" && req.method === "GET") {
    await colorController.getColorSwatches(req, res);
  } else if (req.url === "/api/strategies" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", async () => {
      const strategyData = JSON.parse(body);
      try {
        await colorController.colorStrategy(strategyData, res);
      } catch (error) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "Error adding color strategy" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
};

module.exports = colorRoutes;
