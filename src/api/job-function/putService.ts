import { api } from "services/api"

type PutServiceProps = {
	cn: string
	dn: string
	application_dn: string
	displayName: string
	description: string
	embDisplayRule: string
}

export async function PutService(props: PutServiceProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<string>("/service", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
