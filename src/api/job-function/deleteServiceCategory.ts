import { api } from "services/api"

type DeleteCategoryServiceProps = {
	cn: string
	displayName?: string
	description?: string
	embCategoryID?: string
	embCompanyType?: string[]
	embMarket?: string[]
	embTypeAirCraft?: string[]
}

export async function DeleteServiceCategory(props: DeleteCategoryServiceProps) {
	const { data } = await api.delete<void>("/service/category", {
		data: props,
	})

	return data
}
