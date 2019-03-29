const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

module.exports = server => {
	server.use(express.json());
	server.use(bodyParser.json());
	server.use(morgan("combined"));
	server.use(helmet());
	server.use(cors());
};
