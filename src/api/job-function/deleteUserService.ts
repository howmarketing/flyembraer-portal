import { api } from "services/api"

type DeleteUserDnProps = string

type DeleteUserServiceProps = string[]

export async function DeleteUserService(userDn: DeleteUserDnProps, serviceDn: DeleteUserServiceProps) {
	const { data } = await api.delete(`/service/user?userDn=${userDn}&serviceDn=${serviceDn}`)
	return data
}
