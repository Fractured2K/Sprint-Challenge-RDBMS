const db = require("../database/dbConfig");

module.exports = {
	addProject,
	find,
	findById
};

async function addProject(project) {
	const [id] = await db("projects").insert(project);

	return await db("projects")
		.where({ id })
		.first();
}

function find() {
	return db("projects");
}

async function findById(id) {
	const project = await db("projects")
		.where({ id })
		.first();

	const actions = await db("actions").where({ project_id: id });

	project["actions"] = actions;

	return project;
}
