const http = require("http");
require("dotenv").config();
const colorRoutes = require("./routes/colorRoutes");
const hostname = process.env.DB_HOST;
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  colorRoutes(req, res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
