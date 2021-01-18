const { fetch, fetchAll } = require('../../lib/postgres')

const POSITIONS = `
	SELECT 
		*
	FROM 
		positions
`

const getPositions = () => fetchAll(POSITIONS)

module.exports = {
	getPositions,
}