import { api } from "services/api"

type GetContractByFileProps = string

export async function GetContractsByFile(filename: GetContractByFileProps) {
	const { data } = await api.get<GetContractByFileProps>(`/contract/files/${filename}`)

	return data
}
