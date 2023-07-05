import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import { UserCompany } from "types/UserCompany"

type GetCompanyByObjectProps = {
	userDisplayName?: string
	userMail?: string
	companyDisplayName?: string
	companyCountry?: string
	companyEmbStatus?: string
	application?: string
	service?: string
	categoryBtc?: string
	categoryMarket?: string
	categoryAircraftType?: string
}
type GeCompanyByObjectResponse = UserCompany[]

export async function GetCompanyByObject(props: GetCompanyByObjectProps) {
	const UrlObject = JSON.parse(JSON.stringify(props))
	const queryParamsUrl = new URLSearchParams(UrlObject).toString()

	const { data } = await api.get<GeCompanyByObjectResponse>(`/company/object?${queryParamsUrl}`)

	return data
}

export const useGetCompanyByObject = (
	props: GetCompanyByObjectProps,
	useQueryOptions?: UseQueryOptions<GeCompanyByObjectResponse, unknown>
) => {
	return useQuery<GeCompanyByObjectResponse>(["company-object", props], () => GetCompanyByObject(props), {
		...useQueryOptions,
	})
}
