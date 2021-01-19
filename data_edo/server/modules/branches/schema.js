const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Branches {
		branch_id: ID!
		branch_name: String!
		branch_is_main: Boolean!
	}

	extend type Query {
		branches: [Branches!]!
	}
`