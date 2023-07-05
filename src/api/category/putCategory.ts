import { api } from "services/api"

type PutCategoryProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PutCategory(props: PutCategoryProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<PutCategoryProps>("/category", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
