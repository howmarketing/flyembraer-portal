import { api } from "services/api"

type PostContractProps = string

export async function PostContract() {
	const { data } = await api.post<PostContractProps>("/contract/upload", {
		headers: {
			"Content-Type": "Multipart/form-data",
		},
	})
	return data
}

// new DOMParser().parseFromString
