import { api } from "services/api"

type PostCompanyCategoryProps = {
	embCompanyCode: string
	embCategoryID: string[]
}

export async function PostCompanyCategory(props: PostCompanyCategoryProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("https://portal.dev.flyembraer.com/api/v1/portal/category/company", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
