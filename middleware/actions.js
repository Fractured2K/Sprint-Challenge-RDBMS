const notEmpty = (req, res, next) => {
	const { description, notes } = req.body;

	if (!description || !notes)
		return res
			.status(400)
			.json({ message: "Please make sure to fill out all fields" });

	next();
};

module.exports = {
	notEmpty
};
