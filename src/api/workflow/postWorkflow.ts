import { api } from "services/api"
import { WorkflowPayload } from "types/WorkflowPayload"

type PostWorkflowProps = WorkflowPayload

export async function PostWorkflow(props: PostWorkflowProps) {
	const body = JSON.stringify(props)

	const { data } = await api.post<string>("/workflow", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
