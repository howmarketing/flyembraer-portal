import { Companies } from "./CompanyExistsDTO"

export type User = {
	code?: string
	dn?: string
	cn?: string
	displayName?: string
	givenName?: string
	sn?: string
	personalTitle?: string
	mail?: string
	embMail2?: string
	title?: string
	telephoneNumber?: string
	extensionTelephoneNumber?: string
	fax?: string
	streetAddress?: string
	location?: string
	st?: string
	postalCode?: string
	co?: string
	embProfile?: string
	embDnCompany?: string
	embNameCompany?: string
	embCompanyCode?: string
	embNameCompanyAdmin?: string
	embPersonalTitleCompanyAdmin?: string
	embTheme?: string
	embStatus?: string
	embApprovalDate?: string
	embApprovalUser_name?: string
	embPAM?: string
	embUserContentAdmin?: string
	loginDisable?: string
	userName?: string
	company?: Companies
}
