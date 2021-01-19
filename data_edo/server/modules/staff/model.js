const { fetch, fetchAll } = require('../../lib/postgres')

const USER_INFO = `
	SELECT 
		u.user_username,
		u.user_firstname,
		u.user_lastname,
		u.user_middlename
	FROM 
		staff s
	NATURAL JOIN 
		users u
	WHERE 
		s.branch_id = $1
`

const BRANCH_INFO = `
	SELECT 
		branch_name
	FROM 
		branches
	WHERE 
		branch_id = $1
`

const DEPARTMENT_INFO = `
	SELECT 
		d.department_name
	FROM 
		departments d
	NATURAL JOIN staff s
	WHERE 
		branch_id = $1
`

const POSITION_INFO = `
	SELECT 
		p.position_name
	FROM 
		positions p
	NATURAL JOIN staff s
	WHERE
		branch_id = $1
`

const getUserInfo 		= (branch_id) 	=>  fetchAll(USER_INFO, branch_id)
const getBranchInfo 	= (branch_id) 	=>	fetch(BRANCH_INFO, branch_id) 
const getDepartmentInfo = (branch_id)	=>	fetchAll(DEPARTMENT_INFO, branch_id)
const getPositionInfo 	= (branch_id)	=>	fetchAll(POSITION_INFO, branch_id)

module.exports = {
	getUserInfo,
	getBranchInfo,
	getDepartmentInfo,
	getPositionInfo
}