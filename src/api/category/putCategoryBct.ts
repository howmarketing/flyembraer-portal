import { api } from "services/api"

type PutCategoryBctProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function PutCategoryBct(props: PutCategoryBctProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<PutCategoryBctProps>("/category/bct", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
