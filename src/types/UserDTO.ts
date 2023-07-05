export type UserDto = {
	prefix?: string
	fullName: string
	jobTitle: string
	email: string
	emailConfirmation: string
	email2?: string
	phone: string
	phone2?: string
	phoneExtension?: string
	phoneExtension2?: string
	fax?: string
	requiredServices?: string[]
	country?: string
	state?: string
	city?: string
	address?: string
	postalCode?: string
	embDnCompany?: string
	embNameCompany?: string
	embCompanyCode?: string
	embNameCompanyAdmin?: string
	embPersonalTitleCompanyAdmin?: string
	embProfile?: string
	embTheme?: string
	embCreationDate?: string
	document?: Document
}

type Document = {
	name?: string
	url?: string
	uploadDate?: string
	uploadBy?: string
	owner?: string
}
