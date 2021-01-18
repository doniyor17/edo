const { gql } = require('apollo-server-express')

module.exports = gql`

	scalar Upload

	type Query {
		uploads: String!
	}

	type Mutation {
		uploadFile(file: Upload!): String!
	}
`