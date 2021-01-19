const branchModel = require('./model')

module.exports = {
	Query: {
		branches: async() => {
			return await branchModel.getBranches()
		}
	}
}