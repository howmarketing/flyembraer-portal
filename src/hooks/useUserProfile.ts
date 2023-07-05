import { useGetProfile } from "api/profile/getProfile"

export const useUserProfile = () => {
	const { data } = useGetProfile({ cacheTime: 1000 * 60 * 15, staleTime: 1000 * 60 * 15 /* 15 minutes */ })
	return { ...data }
}
