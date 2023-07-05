import { useQuery, UseQueryOptions } from "react-query"
import { api } from "services/api"

type GetUserAvatarResponse = string
type GetUserAvatarApiResponse = Blob

export async function getUserAvatar(): Promise<GetUserAvatarResponse> {
	const { data } = await api.get<GetUserAvatarApiResponse>(
		`${process.env.NEXT_PUBLIC_DC_API_URL}/people/-me-/avatar`,
		{
			responseType: "blob",
		}
	)
	const imageURL = URL.createObjectURL(data)
	return imageURL
}

export function useGetUserAvatar(useQueryOptions?: UseQueryOptions<GetUserAvatarResponse, unknown>) {
	return useQuery<GetUserAvatarResponse>(["avatar"], getUserAvatar, {
		cacheTime: 1000 * 60 * 60, // 1 hour
		staleTime: 1000 * 60 * 60,
		...useQueryOptions,
	})
}
