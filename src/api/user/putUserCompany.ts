import { api } from "services/api"

type Document = {
	name?: string
	url?: string
	uploadDate?: string
	uploadBy?: string
	owner?: string
}
type updateUserDTO = {
	updateUserDTO?: PutUserProps
}
export type PutUserProps = {
	dn: string
	username: string
	prefix?: string
	fullName?: string
	jobTitle?: string
	email?: string
	emailConfirmation?: string
	phone?: string
	phoneExtension?: string
	fax?: string
	requiredServices?: string
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

export async function putUser(props: updateUserDTO) {
	const body = JSON.stringify(props)

	const { data } = await api.put<string>(`/user`, body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
