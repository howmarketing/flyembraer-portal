export type WorkflowPayload = {
	companyName: string
	companyAdminName: string
	companyDn: string
	companyCode: string
	username: string
	type: string
	dateRegistration: string
	jobFunction: JobFunction[]
	companyWorkflow: boolean
}

export type JobFunction = {
	name: string
	dn: string
	services: JobFunctionDetail[]
}

export type JobFunctionDetail = {
	name: string
	dn: string
	remove: boolean
}
