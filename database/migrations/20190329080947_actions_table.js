exports.up = function(knex) {
	return knex.schema.createTable("actions", tbl => {
		tbl.increments();
		tbl.string("description", 255).notNullable();
		tbl.string("notes", 255).notNullable();
		tbl.boolean("completed", 255).defaultTo(false);

		tbl.integer("project_id")
			.unsigned()
			.references("id")
			.inTable("projects")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("actions");
};
