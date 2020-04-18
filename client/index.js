const express = require("express");
const next = require("next");
const path = require("path");
const fs = require("fs");
const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 4000;
const app = next({ dev });
const handle = app.getRequestHandler();
app
  .prepare()
  .then(() => {
    const server = express();
    server.use("/static", express.static(path.join(__dirname, "static")));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/pdf", (req, res) => {
      var file = fs.createReadStream("./public/backendcv.pdf");
      file.pipe(res);
    });

    server.listen(port, () => {
      console.log("Server listining on port ", port);
    });
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
