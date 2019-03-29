const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

server.use(express.json());
server.use(bodyParser.json());
server.use(morgan());
server.use(helmet());
server.use(cors());

server.listen(5000, () =>
	console.log("Server now running on http://localhost:5000")
);
