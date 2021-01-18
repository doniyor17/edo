const { gql } = require('apollo-server-express')

module.exports = gql`
	
	type Position {
		position_id: ID!
		position_name: String!
	}

	extend type Query {
		positions: [Position!]!
	}
`