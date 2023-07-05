import { api } from "services/api"

type PostCategoryAircraftProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PostCategoryAircraft(props: PostCategoryAircraftProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/category/aircraft", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
