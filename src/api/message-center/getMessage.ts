import { UseQueryOptions, useQuery } from "react-query"
import qs from "query-string"

import { api } from "services/api"
import { PageMessage } from "types/PageMessage"

type GetMessageProps = {
	title?: string
	startDate?: string
	endDate?: string
}

type GetMessagePagination = {
	page: number
	size?: number
	sort?: string[]
}

type GetMessageParams = GetMessagePagination & GetMessageProps

export async function GetMessage({ page, size = 10, sort, endDate, startDate, title }: GetMessageParams) {
	const query = qs.stringify({
		page,
		size,
		sort,
		endDate,
		startDate,
		title,
	})

	const { data } = await api.get<PageMessage>(`/message?${query}`)
	return data
}

export function useGetMessages(params: GetMessageParams, useQueryOptions?: UseQueryOptions<PageMessage, unknown>) {
	return useQuery<PageMessage>(["message-center-messages", params], () => GetMessage(params), {
		...useQueryOptions,
	})
}
