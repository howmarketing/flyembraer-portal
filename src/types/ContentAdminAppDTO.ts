export type ContentAdminDTO = {
	name?: string
	dn?: string
	username?: string
}

export type ContentAdminAppDTO = {
	applicationDn?: string
	applicationName?: string
	admins?: ContentAdminDTO[]
}
