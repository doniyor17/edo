const { gql } = require('apollo-server-express')

module.exports = gql`
	
	scalar Data

	extend type Query {
		hello: String!
	}

	extend type Mutation {
		login(login: String! password: String!): Data! 
	}
`