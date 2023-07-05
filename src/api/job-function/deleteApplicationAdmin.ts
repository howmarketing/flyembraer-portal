import { api } from "services/api"

type DeleteApplicationAdminProps = {
	name: string
	username: string
	userDn: string
	applicationName: string
	applicationDn: string
}

export async function DeleteApplicationAdmin(props: DeleteApplicationAdminProps) {
	const { data } = await api.delete<void>("https://portal.dev.flyembraer.com/api/v1/portal/service/user/category", {
		data: props,
	})
	return data
}
