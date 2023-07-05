import { api } from "services/api"

type PostCategoryBctProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function postCategoryBct(props: PostCategoryBctProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/category/bct", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
