import { api } from "services/api"

type PostCategoryProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PostCategory(props: PostCategoryProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/category", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
