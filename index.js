const express = require("express");
const middleware = require("./middleware/config");

// controllers
const projectsController = require("./controllers/projects");
const actionsController = require("./controllers/actions");

const server = express();

// middleware
middleware(server);

// route handlers
server.use("/api/projects", projectsController);
server.use("/api/actions", actionsController);

server.listen(5000, () =>
	console.log("Server now running on http://localhost:5000")
);
