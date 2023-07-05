import { TAuthConfig } from "react-oauth2-code-pkce"

export const authConfig: TAuthConfig = {
	clientId: "alfresco",
	authorizationEndpoint: process.env.NEXT_PUBLIC_AUTH_ENDPOINT ?? "",
	tokenEndpoint: process.env.NEXT_PUBLIC_TOKEN_ENDPOINT ?? "",
	logoutEndpoint: process.env.NEXT_PUBLIC_LOGOUT ?? "",
	redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI ?? "",
	onRefreshTokenExpire: (event) =>
		window.confirm("Tokens have expired. Refresh page to continue using the site") && event.login(),
	scope: "openid profile email",
	autoLogin: false,
	logoutRedirect: "https://portal.dev.flyembraer.com",
}
