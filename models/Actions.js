const db = require("../database/dbConfig");

module.exports = {
	addAction
};

async function addAction(project) {
	const [id] = await db("actions").insert(project);

	return await db("actions")
		.where({ id })
		.first();
}
