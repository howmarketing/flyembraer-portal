import { api } from "services/api"
import { PageMessage } from "types/PageMessage"

type GetUserCnProps = string

type GetUserCnPageableProps = {
	page: number
	size: number
	sort: string[]
}

export async function GetMessageUserCn(userCn: GetUserCnProps, pageable: GetUserCnPageableProps) {
	const pegeableUrlParams = JSON.parse(JSON.stringify(pageable))
	const url = new URLSearchParams(pegeableUrlParams).toString()

	const { data } = await api.get<PageMessage>(`/message/user/${userCn}?${url}`)
	return data
}
