import { useQuery, UseQueryOptions } from "react-query"

import { api } from "services/api"
import { Workflow } from "types/Workflow"

type GetTaskWorkflowIdProps = {
	applicationDn: string
}

export async function GetTaskWorkflowId(workflowId: number, queryParams: GetTaskWorkflowIdProps) {
	const queryParamsUrlObject = JSON.parse(JSON.stringify(queryParams))
	const queryParamsUrl = new URLSearchParams(queryParamsUrlObject)?.toString()

	const { data } = await api.get<Workflow>(`workflow/task/${workflowId}?${queryParamsUrl}`)
	return data
}

export function UseTaskWorkflowId(
	useQueryOptions: UseQueryOptions<Workflow>,
	workflowId: number,
	queryParams: GetTaskWorkflowIdProps
) {
	return useQuery<Workflow>(["workflow-task-workflowid"], () => GetTaskWorkflowId(workflowId, queryParams), {
		...useQueryOptions,
	})
}
