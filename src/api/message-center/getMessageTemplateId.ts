import { UseQueryOptions, useQuery } from "react-query"
import { api } from "services/api"

export type GetMessageTemplateIdResponse = {
	id: number
	name: string
	title: string
	htmlMessage: string
	incDate: string
}

type GetMessageTemplateIdProps = {
	id: string
}

export async function getMessageTemplateId({ id }: GetMessageTemplateIdProps) {
	const { data } = await api.get<GetMessageTemplateIdResponse>(`/message/template/${id}`)
	return data
}

export function useGetTemplateById(
	params: GetMessageTemplateIdProps,
	useQueryOptions?: UseQueryOptions<GetMessageTemplateIdResponse, unknown>
) {
	return useQuery<GetMessageTemplateIdResponse>(
		[`message-center-template-${params.id}`, params],
		() => getMessageTemplateId(params),
		{
			...useQueryOptions,
		}
	)
}
