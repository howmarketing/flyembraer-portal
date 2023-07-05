import { api } from "services/api"

type Document = {
	name?: string
	url?: string
	uploadDate?: string
	uploadBy?: string
	owner?: string
}

export type PutUserProps = {
	dn: string
	username: string
	prefix?: string
	fullName?: string
	jobTitle?: string
	email?: string
	email2?: string
	phone?: string
	phone2?: string
	ddi?: string
	ddi2?: string
	phoneExtension?: string
	phoneExtension2?: string
	fax?: string
	requiredServicesDn?: string[]
	removeServicesDn?: string[]
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
	embStatus?: string
	embPAM?: string
	logindisable?: string
	embUserContentAdmin?: string
	document?: Document
}

export async function putUser(props: PutUserProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<string>(`/user`, body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
