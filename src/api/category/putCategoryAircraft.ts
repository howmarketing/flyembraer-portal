import { api } from "services/api"

type PutCategoryAircraftProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PutCategoryAircraft(props: PutCategoryAircraftProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<PutCategoryAircraftProps>("/category/aircraft", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
