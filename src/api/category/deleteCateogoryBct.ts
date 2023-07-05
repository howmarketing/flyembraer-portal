import { api } from "services/api"

type DeleteCategoryBctProps = string

export async function DeleteCategoryBct(bct: DeleteCategoryBctProps) {
	const { data } = await api.delete(`/category/bct?bct=${bct}`)
	return data
}
