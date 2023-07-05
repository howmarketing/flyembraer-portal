import { api } from "services/api"

type PostServiceCategoryProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PostServiceCategory(props: PostServiceCategoryProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/service/category", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
