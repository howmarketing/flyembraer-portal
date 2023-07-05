import { api } from "services/api"

type DeleteCategoryProps = {
	cn: string
	dn: string
	application_dn: string
	displayName: string
	description: string
	embDisplayRule: string
}

export async function DeleteService(props: DeleteCategoryProps) {
	const { data } = await api.delete<void>("/service", {
		data: props,
	})

	return data
}
