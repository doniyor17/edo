const { gql } = require('apollo-server-express')

module.exports = gql`
	type Users {
		user_id: ID!
		user_role: String!
		user_username: String!
		user_firstname: String!
		user_lastname: String!
		user_middlename: String
		user_created_at: DateTime!
	}

	extend type Query {
		users: [Users!]!
	}
`