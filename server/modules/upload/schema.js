const { gql } = require('apollo-server-express')

module.exports = gql`

	scalar Upload

	type File {
		filename: String
		mimetype: String
		encoding: String
		path: String
		savedFileName: String
	}

	type Query {
		uploads: File
	}

	type Mutation {
		uploadFile(file: Upload!): File
	}
`