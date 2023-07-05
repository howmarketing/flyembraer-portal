import { api } from "services/api"

type DeleteCategoryMarketProps = string

export async function DeleteCategoryMarket(market: DeleteCategoryMarketProps) {
	const { data } = await api.delete(`/category/market?market=${market}`)
	return data
}
