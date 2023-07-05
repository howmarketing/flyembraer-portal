import { api } from "services/api"

type GetUserGenerateLoginProps = string

export async function GetUserGenerateLogin(fullName: GetUserGenerateLoginProps) {
	const { data } = await api.get<string>(`/user/generateLogin?fullName=${fullName}`)

	return data
}
