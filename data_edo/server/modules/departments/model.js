const { fetch, fetchAll } = require('../../lib/postgres')

const DEPARTMENTS = `
	SELECT 
		department_id,
		department_name
	FROM 
		departments
	WHERE 
		branch_id = $1
`

const getDepartments = (branch_id) => fetchAll(DEPARTMENTS, branch_id)

module.exports = {
	getDepartments,
}