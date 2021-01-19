const userModel = require('./model')

module.exports = {
	Query: {
		staff: async(_, { branchId }) => {
			try {
				const userInfoRows = await userModel.getUserInfo(branchId)
				const branchInfoRow = await userModel.getBranchInfo(branchId)
				const departmentInfoRows = await userModel.getDepartmentInfo(branchId)
				const positionInfoRows = await userModel.getPositionInfo(branchId)
				if (userInfoRows && branchInfoRow && departmentInfoRows && positionInfoRows) {
					return {
						userInfo: userInfoRows,
						branchInfo: branchInfoRow,
						departmentInfo: departmentInfoRows,
						position: positionInfoRows
					}
				}
				else {
					throw new Error("Error")
				}
			}
			catch(error) {
				throw new Error(error).message || error
			}
			
		}
	},
	StaffUsers: {
		user_username: global => global.user_username,
		user_firstname: global => global.user_firstname,
		user_lastname: global => global.user_lastname,
		user_middlename: global => global.user_middlename === null ? '' : global.user_middlename,
	},
	StaffBranch: {
		branch_name: global => global.branch_name
	},
	StaffDepartment: {
		department_name: global => global.department_name
	},
	StaffPosition: {
		position_name: global => global.position_name
	}
}