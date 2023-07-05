import { api } from "services/api"

export type MessagesFilter = {
	groupAll: boolean
	userId: string | null
	userLabel: string | null
	companyId: string | null
	companyLabel: string | null
	bctId: string | null
	bctLabel: string | null
	marketId: string | null
	marketLabel: string | null
	aircraftId: string | null
	aircraftLabel: string | null
	applicationId: string | null
	applicationLabel: string | null
	serviceId: string | null
	serviceLabel: string | null
	profileId: string | null
	profileLabel: string | null
}

type PostMessageProps = {
	title: string
	htmlMessage: string
	startDate: string
	endDate: string
	alert: boolean
	messages: MessagesFilter[]
}

export async function postMessage(props: PostMessageProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/message", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
