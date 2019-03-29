const notEmpty = (req, res, next) => {
	const { name, description } = req.body;

	if (!name || !description)
		return res
			.status(400)
			.json({ message: "Please make sure to fill out all fields" });

	next();
};

module.exports = {
	notEmpty
};
