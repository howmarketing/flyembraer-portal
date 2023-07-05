import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"
import type { Company } from "types/CompanyDTO"

type GetCompanyByCodeProps = string
type GetCompanyByCodeResponse = Company

export async function getCompanyCode(embCompanyCode: GetCompanyByCodeProps) {
	const { data } = await api.get<Company>(`/company/${embCompanyCode}`)

	return data
}

export const useGetCompanyByCode = (
	props: GetCompanyByCodeProps,
	useQueryOptions?: UseQueryOptions<GetCompanyByCodeResponse, unknown>
) => {
	return useQuery<GetCompanyByCodeResponse>(["company-code", props], () => getCompanyCode(props), {
		...useQueryOptions,
	})
}
