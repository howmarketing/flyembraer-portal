import { api } from "services/api"

type DeleteCategoryProps = string

export async function DeleteCategoryAircraft(aircraft: DeleteCategoryProps) {
	const { data } = await api.delete(`/category/aircraft?aircraft=${aircraft}`)
	return data
}
