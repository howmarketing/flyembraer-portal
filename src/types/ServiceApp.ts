export type ServiceApp = {
	displayName?: string
	dn?: string
	cn?: string
	description?: string
	app_displayName?: string
	app_dn?: string
	embDisplayRule?: string
	embBusinessRule?: string
	embJFGroup?: string
}

export type Application = [
	{
		displayName: string
		ou_dn: string
		access_dn: string
	}
]
