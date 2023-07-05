import { api } from "services/api"

type DeleteCategoryProps = string

export async function DeleteCategory(embCategoryId: DeleteCategoryProps) {
	const { data } = await api.delete(`/category?embCategoryId=${embCategoryId}`)
	return data
}
