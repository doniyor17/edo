const users = [
	{
		id: 1,
		role: 'HR',
		password: 'HR'
	}
]

module.exports = {
	Query: {
		hello: () => "Hello World"
	},
	Mutation: {
		login: async(_, { login, password }) => {
			try {
				if(login && password) {
					const findHR = users.find(e => e.role === login && e.password === password)
					console.log(findHR)
					if(findHR) {
						return {
							status: 200,
							message: "OK"
						}
					}
					else {
						return {
							status: 403,
							message: "Forbidden"
						}
					}
				}
				else {
					return {
						status: 401,
						message: "Input Error"
					}
				}
			}
			catch(error) {
				return new Error(error).message || error
			}
		}
	}
}