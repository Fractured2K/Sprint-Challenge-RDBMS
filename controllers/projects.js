const router = require("express").Router();
const Projects = require("../models/Projects");

// middleware
const { notEmpty } = require("../middleware/projects");

// Create project
router.post("/", notEmpty, async (req, res) => {
	try {
		const project = await Projects.addProject(req.body);
		res.status(201).json(project);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but there was an error while creating that project"
		});
	}
});

// Get all projects
router.get("/", async (req, res) => {
	try {
		const projects = await Projects.find();
		res.status(200).json(projects);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but we couldn't get any projects"
		});
	}
});

// Get project by id
router.get("/:id", async (req, res) => {
	try {
		const project = await Projects.findById(req.params.id);
		res.status(200).json(project);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but we couldn't get that project"
		});
	}
});

module.exports = router;
