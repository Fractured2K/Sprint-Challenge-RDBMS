const router = require("express").Router();
const Actions = require("../models/Actions");

// middleware
const { notEmpty } = require("../middleware/actions");

// Create action
router.post("/", notEmpty, async (req, res) => {
	try {
		const action = await Actions.addAction(req.body);
		res.status(201).json(action);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but something went wrong will create that action"
		});
	}
});

// Get actions
router.get("/", async (req, res) => {
	try {
		const actions = await Actions.find();
		res.status(200).json(actions);
	} catch (err) {
		res.status(500).json({
			message: "Sorry, but we couldn' get any actions "
		});
	}
});

module.exports = router;
