const router = require("express").Router();
const Projects = require("../models/Projects");

// Create project
router.post("/", async (req, res) => {
	try {
		console.log(req.body);
		const project = await Projects.addProject(req.body);
		res.status(200).json(project);
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: "Sorry, but there was an error while creating the project"
		});
	}
});

// Get all projects
router.get("/", async (req, res) => {});

module.exports = router;
