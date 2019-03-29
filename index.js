const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

// controllers
const projectsController = require("./controllers/projects");

const server = express();

server.use(express.json());
server.use(bodyParser.json());
server.use(morgan());
server.use(helmet());
server.use(cors());

// route handler
server.use("/api/projects", projectsController);

server.listen(5000, () =>
	console.log("Server now running on http://localhost:5000")
);
