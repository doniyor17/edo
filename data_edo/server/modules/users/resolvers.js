const userModel = require('./model')

module.exports = {
	Query: {
		users: async() => {
			return await userModel.getUsers()
		}
	}
}