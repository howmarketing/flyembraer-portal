import { useQuery } from "react-query"
import { api } from "services/api"
import { AllUsers } from "types/AllUsers"

type GetUserNameProps = {
	name: string
}

export async function getUserNames({ name }: GetUserNameProps) {
	const { data } = await api.get<AllUsers>(`/user/name?displayName=${name}`)

	return data
}

export function useGetUserByName(params: GetUserNameProps) {
	return useQuery(["message-center-messages", params], () => getUserNames(params))
}
