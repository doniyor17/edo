const { fetch, fetchAll } = require('../../lib/postgres')

const BRANCHES = `
	SELECT 
		* 
	FROM 
		branches
`

const getBranches = () => fetchAll(BRANCHES)

module.exports = {
	getBranches,
}