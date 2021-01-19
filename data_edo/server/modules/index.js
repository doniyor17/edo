const BranchModule = require('./branches')
const DepartmentModule = require('./departments')
const UserModule = require('./users')
const Scalars = require('./scalars')
const PositionModule = require('./positions')
const StaffModule = require('./staff')

module.exports = [
	BranchModule,
	DepartmentModule,
	UserModule,
	Scalars,
	PositionModule,
	StaffModule
]