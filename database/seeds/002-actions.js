exports.seed = function(knex, Promise) {
	return knex("actions").insert([
		{
			description: "Async Redux - Redux Thunk",
			notes:
				"By nature Redux is synchronous. Because of this we need to apply some middleware to extend the functionality of our Redux package to allow for things like, promises (which are asynchronous). This module will teach you how to set up Redux-Thunk as a middleware for Redux. You will also learn how to use the Redux-Thunk package to extend your actions so that you have the ability to consume promises.",
			completed: true,
			project_id: 1
		},
		{
			description: "Redux Middleware / Authentication",
			notes:
				"We will continue building React/Redux apps that work with API’s.",
			completed: true,
			project_id: 1
		},
		{
			description: "Server-side Routing",
			notes: `Node’s HTTP server uses a single request handler function for all requests. Express provides a way to break the application into different request handlers for each URL+ HTTP method combination.

This feature is called Routing and is one of the main features of Express.`,
			completed: true,
			project_id: 2
		},
		{
			description: "Express Middleware",
			notes: `Express is a minimalist framework. It doesn’t provide everything out of the box, but using middleware we can add extra functionality to our application. Middleware provide a way to extend the features provided by the Express framework.

They are implemented as small functions that handle one aspect of our application. Tasks like authentication and logging are commonly handled by middleware. Another benefit of Middleware is that it provides an easy way to add modularity to our code.`,
			completed: true,
			project_id: 2
		},
		{
			description: "Querying Data, Migrations and Seeding",
			notes: `Performing single table queries.
Filtering data using where clause.
Sorting data.
Pagination.
Grouping data.
Performing multi-table queries using joins.
using Knex migrations.
seeding test data using Knex.`,
			completed: true,
			project_id: 3
		},
		{
			description: "Introduction to Data Modeling",
			notes: `A data model is an abstraction of the information a system needs to fulfill it’s purpose.

When designing a data model we go from high level Entities to low level database schemas. The lower we get the more detailed the model needs to be. We’ll work at the physical database design level in order to learn how to create database objects, but always working towards the high level entities.`,
			completed: true,
			project_id: 3
		}
	]);
};
