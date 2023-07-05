import { UseQueryOptions, useQuery } from "react-query"

import { api } from "services/api"
import { Workflow } from "types/Workflow"

type GetWorkflowProps = {
	content?: Workflow[]
	empty?: boolean
	first?: boolean
	last?: boolean
	number?: number
	numberOfElements?: number
	pageable?: Pageable
	size?: number
	sort?: Sort
	totalElements?: number
	totalPages?: number
}

type Pageable = {
	offset?: number
	pageNumber?: number
	pageSize?: number
	paged?: boolean
	sort?: Sort
	unpaged?: boolean
}

type Sort = {
	empty?: boolean
	unsorted?: boolean
	sorted?: boolean
}

type GetWorkflowPagination = {
	page: number
	size: number
	sort: string[]
}

export async function GetWorkflow(pagination: GetWorkflowPagination, queryParams?: Workflow) {
	const paginationUrlObject = JSON.parse(JSON.stringify(pagination))
	const queryParamsUrlObject = JSON.parse(JSON.stringify(queryParams))
	const paginationParamsUrl = new URLSearchParams(paginationUrlObject).toString()
	const queryParamsUrl = new URLSearchParams(queryParamsUrlObject)?.toString()

	const { data } = await api.get<GetWorkflowProps>(`/workflow?${paginationParamsUrl}&${queryParamsUrl}`)
	return data
}

export const useGetWorkflow = (
	useQueryOptions: UseQueryOptions<GetWorkflowProps>,
	pagination: GetWorkflowPagination,
	queryParams?: Workflow
) => {
	return useQuery<GetWorkflowProps>("workflow", () => GetWorkflow(pagination, queryParams), {
		...useQueryOptions,
	})
}
