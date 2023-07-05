import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

type GetUserMarketProps = string

// type GetUserMarketPageableProps = {
//   displayName: string
//   dn: string
//   cn: string
// }

export async function GetUserMarket(market: GetUserMarketProps) {
	// const paginationUrlObject = JSON.parse(JSON.stringify(pagination))
	// const paginationParamsUrl = new URLSearchParams(paginationUrlObject).toString()

	const { data } = await api.get<AllUsers>(`/user/market?=${market}`)

	return data
}
