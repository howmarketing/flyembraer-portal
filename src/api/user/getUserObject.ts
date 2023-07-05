import { api } from "services/api"

export type GetUserUserByObjectProps = {
	id?: string
	userCn?: string
	userDisplayName?: string
	userTelephoneNumber?: string
	userMail?: string
	userEmbStatus?: string
	userEmbProfile?: string
	companyDisplayName?: string
	companyLastUpdate?: string
	companyCountry?: string
	companyStreetAddress?: string
	companyEmbApprovalUsername: string
	application?: string
	service?: string
}

export async function GetUserUserByObject(queryParams?: GetUserUserByObjectProps) {
	const queryParamsUrl = new URLSearchParams(queryParams).toString()

	const { data } = await api.get<GetUserUserByObjectProps>(`/user/object?=${queryParamsUrl}`)

	return data
}
