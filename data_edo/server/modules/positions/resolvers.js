const positionModel = require('./model')

module.exports = {
	Query: {
		positions: async() => {
			return await positionModel.getPositions()
		}
	}
}