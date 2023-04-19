const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = function setupMiddleware(app) {
  // Body parser middleware
  app.use(bodyParser.json());

  // CORS middleware
  app.use(cors());
};
