import { UseQueryOptions, useQuery } from "react-query"
import qs from "query-string"

import { api } from "services/api"
import { PageMessage } from "types/PageMessage"

type GetMessageTemplateProps = {
	title?: string
	startDate?: string
	endDate?: string
}

type GetMessageTemplatePagination = {
	page: number
	size?: number
	sort?: string[]
}

type GetMessageTemplates = GetMessageTemplatePagination & GetMessageTemplateProps

export async function GetMessageTemplate({ page, size = 10, sort, endDate, startDate, title }: GetMessageTemplates) {
	const query = qs.stringify({
		page,
		size,
		sort,
		endDate,
		startDate,
		title,
	})

	const { data } = await api.get<PageMessage>(`/message/template?${query}`)
	return data
}

export function useGetMessagesTemplates(
	params: GetMessageTemplates,
	useQueryOptions?: UseQueryOptions<PageMessage, unknown>
) {
	return useQuery<PageMessage>(["message-center-templates", params], () => GetMessageTemplate(params), {
		...useQueryOptions,
	})
}
