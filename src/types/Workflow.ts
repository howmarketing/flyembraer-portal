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

export type Workflow = {
	id: number
	companyAdminName?: string
	companyCode?: string
	companyName?: string
	dateRegistration?: string
	endWorkflow?: string
	startWorkflow?: string
	statusWorkflow?: string
	tasks?: Task[]
	type?: "U" | "C"
	username?: string
}

export type Task = {
	workflowId: number
	id: number
	applicationDn: string
	applicationName: string
	comment?: string
	endTask?: string
	ownerName?: string
	ownerDn?: string
	responsible?: string
	serviceDn?: string
	serviceName?: string
	startTask?: string
	statusTask?: "A" | "P" | "R"
}

export type App = {
	workflowId: number
	id: number
	applicationDn: string
	applicationName?: string
	tasks?: Task[]
}
