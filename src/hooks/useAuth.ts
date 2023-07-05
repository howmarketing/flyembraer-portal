import { useContext, useMemo } from "react"
import { AuthContext } from "react-oauth2-code-pkce"
import { api } from "services/api"

export const useAuth = () => {
	const auth = useContext(AuthContext)

	const userFullName = useMemo<string | undefined>(() => {
		return auth.tokenData?.given_name
	}, [auth])

	const userName = useMemo<string | undefined>(() => {
		return auth.tokenData?.preferred_username
	}, [auth])

	if (auth.token) {
		api.defaults.headers["Authorization"] = `Bearer ${auth.token}`
	}

	return {
		...auth,
		userName,
		userFullName,
	}
}
