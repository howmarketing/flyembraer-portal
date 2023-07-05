import { UseQueryOptions, useQuery } from "react-query"
import { api } from "services/api"
import { User } from "types/AllUsers"

type GetAdminCompanyCodeProps = string
type GetAdminCompanyCodeResponse = User

export async function getCompanyByCode(embCompanyCode?: GetAdminCompanyCodeProps) {
	const { data } = await api.get<GetAdminCompanyCodeResponse>(`/company/admin/embCompanyCode=${embCompanyCode}`)

	return data
}

export function useGetCompanyByCode(
	embCompanyCode?: GetAdminCompanyCodeProps,
	useQueryOptions?: UseQueryOptions<GetAdminCompanyCodeResponse, unknown>
) {
	return useQuery<GetAdminCompanyCodeResponse>(["companies-by-code"], () => getCompanyByCode(embCompanyCode), {
		...useQueryOptions,
	})
}
