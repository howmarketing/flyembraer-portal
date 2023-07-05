import QueryString from "qs"
import { api } from "services/api"

export function postTokenRevoke(token: string) {
	const body = QueryString.stringify({
		client_id: "alfresco",
		token,
		token_type_hint: "access_token",
	})

	api.post("https://ssodownloadcenter.dev.flyembraer.com/realms/sharerealm/protocol/openid-connect/revoke", body, {
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
	})
	api.post("https://oauth.dev.flyembraer.com/f5-oauth2/v1/revoke")
}
