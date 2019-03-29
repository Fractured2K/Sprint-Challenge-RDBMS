const router = require("express").Router();
const Actions = require("../models/Actions");

// Create action
router.post("/", async (req, res) => {
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
router.get("/", async (req, res) => {});

module.exports = router;
