import { useMutation, UseMutationOptions } from "react-query"
import { api } from "services/api"

type Document = {
	name?: string
	url?: string
	uploadDate?: string
	uploadBy?: string
	owner?: string
}

export type PostUserProps = {
	prefix?: string
	fullName: string
	jobTitle: string
	email: string
	emailConfirmation: string
	email2?: string
	phone: string
	phone2?: string
	ddi: string
	ddi2: string
	phoneExtension?: string
	phoneExtension2?: string
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

type PostUserResponse = {
	code?: number
	invalidatedAttributes?: string[]
	user_dn?: string
	embCompanyType?: string
	dn?: string
	cn?: string
	embCategoryID?: string
}

export async function postUser(props: PostUserProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<PostUserResponse>("/user", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}

export const usePostUser = (
	props: PostUserProps,
	useMutationOptions?: UseMutationOptions<PostUserResponse, unknown>
) => {
	return useMutation<PostUserResponse>(() => postUser(props), { ...useMutationOptions })
}
