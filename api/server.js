// const express = require("express");
// const cors = require("cors");
// const fs = require("fs");
// const server = express();

// server.use(express.json());
// server.use(cors());

// server.get("/", (req, res) => {
//   res.status(200).json({
//     status: 200,
//     message: "Hello "
//   });
// });

// server.get("/pdf", (req, res) => {
//   var file = fs.createReadStream("./public/backendcv.pdf");
//   file.pipe(res);
// });

// // server.listen(port, () => {
// //   console.log("Server listening on port", port);
// // });
