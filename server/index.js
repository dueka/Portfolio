const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 4000;
const cors = require("cors");
app.use(cors());
// Pdf route that will serve pdf
app.get("/pdf", (req, res) => {
  var file = fs.createReadStream("./public/backendcv.pdf");
  file.pipe(res);
});
app.listen(port, () => {
  console.log("Server listining on port ", port);
});
