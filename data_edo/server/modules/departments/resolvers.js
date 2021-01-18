const departmentModel = require('./model')

module.exports = {
	Query: {
		departments: async(_, { branchId }) => {
			const rows = await departmentModel.getDepartments(branchId)
			console.log(rows)
			return rows
		}
	}
}