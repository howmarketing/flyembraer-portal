import { api } from "services/api"

type PutWorkflowTaskProps = {
	workflowId: number
	taskId: number
	comment: string
	status?: string
}

export async function PutWorkflowTask(props: PutWorkflowTaskProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<PutWorkflowTaskProps>("/workflow/task", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
