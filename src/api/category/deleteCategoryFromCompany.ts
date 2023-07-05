import { api } from "services/api"

type DeleteCategoryFromCompanyProps = {
	embCompanyCode: string
	embCategoryID: string[]
}
export async function DeleteCategoryFromCompany(props: DeleteCategoryFromCompanyProps) {
	const { data } = await api.delete<string>(`https://portal.dev.flyembraer.com/api/v1/portal/category/company`, {
		data: props,
	})
	return data
}
