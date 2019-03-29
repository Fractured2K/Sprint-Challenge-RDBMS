const db = require("../database/dbConfig");

module.exports = {
	addProject
};

async function addProject(project) {
	const [id] = await db("projects").insert(project);

	return await db("projects")
		.where({ id })
		.first();
}
