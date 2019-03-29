const db = require("../database/dbConfig");

module.exports = {
	addAction,
	find
};

async function addAction(action) {
	const [id] = await db("actions").insert(action);

	return await db("actions")
		.where({ id })
		.first();
}

function find() {
	return db("actions");
}
