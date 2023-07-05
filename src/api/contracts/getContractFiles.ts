import { api } from "services/api"

type GetContractProps = [
	{
		name?: string
		url?: string
	}
]

export async function GetContractsFiles() {
	const { data } = await api.get<GetContractProps>(`/contract/files`)

	return data
}
