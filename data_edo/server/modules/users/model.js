const { fetch, fetchAll } = require('../../lib/postgres')

const USERS = `
	SELECT 
		user_id,
		user_role,
		user_username,
		user_firstname,
		user_lastname,
		user_middlename,
		user_created_at
	FROM 	
		users
` 

const getUsers = () => fetchAll(USERS)

module.exports = {
	getUsers,
}