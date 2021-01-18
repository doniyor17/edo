const { gql } = require('apollo-server-express')

module.exports = gql`

	type StaffUsers {
		user_username: String!
		user_firstname: String!
		user_lastname: String!
		user_middlename: String
	}

	type StaffBranch {
		branch_name: String!
	}

	type StaffDepartment {
		department_name: String!
	}
	
	type StaffPosition {
		position_name: String!
	}

	type Staff {
		userInfo: [StaffUsers!]
		branchInfo: StaffBranch!
		departmentInfo: [StaffDepartment!]
		position: [StaffPosition!]
	}

	extend type Query {
		staff(branchId: ID!): Staff
	}
`