import { api } from "services/api"

type PutPersonAvatarProps = File

export async function putPersonAvatar(file?: PutPersonAvatarProps) {
	if (file) {
		const formData = new FormData()
		formData.append("image", file)

		const { data } = await api.put<string[]>(`${process.env.NEXT_PUBLIC_DC_API_URL}/people/-me-/avatar`, {
			headers: {
				"Content-Type": "image/png",
			},
		})
		return data
	}
}
