const { gql } = require('apollo-server-express')

module.exports = gql`

	type Departments {
		department_id: ID!
		department_name: String!
	}

	extend type Query {
		departments(branchId: ID!): [Departments!]!
	}
`