exports.seed = function(knex, Promise) {
	return knex("table_name").insert([
		{
			name: "Sprint Challenge Redux Smurfs",
			description:
				"This challenge will have you interfacing with a list of Smurf Data. Your challenge is to build a CRUD application that consumes this Smurf Village using ReactJS and Redux.",
			completed: true
		},
		{
			name: "Sprint Challenge Building Web APIs",
			description: `In this project you will use the acquired knowledge about REST, Express and Node.js to design and build an API to performs CRUD operations on projects and actions.

The data access layer is provided so you can concentrate on building the endpoints.`,
			completed: true
		},
		{
			name: "Sprint Challenge Data Persistence",
			description:
				"In this project you will usq your acquired knowledge about databases, migrations, seeds and apis to build out a database with a working api",
			completed: false
		}
	]);
};
