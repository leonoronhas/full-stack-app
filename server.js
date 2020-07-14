import config from "./config";
import apiRouter from "./api";

import express from "express";

const server = express();

// Set up EJS engine to work with express
server.set('view engine', 'ejs');

server.get("/", (req, res) => {
  res.render('index', {
      content: '...'
  });
});

// Express Middleware
server.use("/api", apiRouter);
server.use(express.static("public"));

server.listen(config.port, () => {
  console.info("Express listening on port", config.port);
});
