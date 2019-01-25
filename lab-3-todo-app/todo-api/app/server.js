const express = require("express")();
const bodyParser = require("body-parser").json();
const cors = require("cors")();
const pino = require("express-pino-logger")();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

express
  .use(bodyParser)
  .use(cors)
  .use(pino)
  .use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .get("/todo", require("./routes/get_todos"))
  .post(
    "/todo",
    require("./validators/create_todo"),
    require("./routes/create_todo")
  )
  .put(
    "/todo/:id",
    require("./validators/update_todo"),
    require("./routes/update_todo")
  )
  .delete("/todo/:id", require("./routes/delete_todo"))
  .get("/health", require("./routes/health_check"))
  .use((req, res) => {
    res.status(404).json({ code: "404", message: "Not Found" });
  });

module.exports = express;
