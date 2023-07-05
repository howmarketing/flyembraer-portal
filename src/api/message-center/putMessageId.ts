import { api } from "services/api"
import { Message } from "types/PageMessage"

type MessagesFilter = {
	groupAll: boolean
	// groupUsers: string | null
	// groupCompany: string | null
	// groupBct: string | null
	// groupMarket: string | null
	// groupAircraft: string | null
	// groupApplication: string | null
	// groupService: string | null
	// groupProfile: string | null
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

export type PutMessageIdProps = {
	title: string
	htmlMessage: string
	startDate: string
	endDate: string
	alert: boolean
	messages: MessagesFilter[]
}

export async function putMessageId(props: PutMessageIdProps, messageId: string) {
	const body = JSON.stringify(props)

	const { data } = await api.put<Message>(`/message/${messageId}`, body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
