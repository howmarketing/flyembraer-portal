export type User = {
	code?: string
	dn?: string
	cn?: string
	displayName?: string
	givenName?: string
	sn?: string
	personalTitle?: string
	mail?: string
	embMail2?: string
	title?: string
	telephoneNumber?: string
	extensionTelephoneNumber?: string
	fax?: string
	streetAddress?: string
	location?: string
	st?: string
	postalCode?: string
	co?: string
	embWantedJF?: string[]
	embProfile?: string
	embDnCompany?: string
	embNameCompany?: string
	embCompanyCode?: string
	embNameCompanyAdmin?: string
	embPersonalTitleCompanyAdmin?: string
	embTheme?: string
	embStatus?: string
	embApprovalDate?: string
	embApprovalUser_name?: string
	embPAM?: string
	embUserContentAdmin?: string
	loginDisable?: string
	userName?: string
	company?: Company
}

export type AllUsers = User[]

export type Company = {
	ou?: string
	displayName?: string
	embAddressNickname?: string
	embCompanyCode?: string
	timeZone?: string
	co?: string
	st?: string
	location?: string
	streetAddress?: string
	postalCode?: string
	telephoneNumber?: string
	extensionTelephoneNumber?: string
	facsimileTelephoneNumber?: string
	embURL?: string
	description?: string
	embInterestFlyEmbraer?: string
	embWantedBCT?: BusinessCompanyType[]
	embWantedMarket?: Market[]
	embWantedAirCraft?: AircraftType[]
	embCompanyRepresentant?: string
	embStatus?: string
	embLastDateStatus?: string
}

export type BusinessCompanyType = {
	displayName?: string
	dn?: string
	cn?: string
	description?: string
}

export type Market = {
	displayName?: string
	dn?: string
	cn?: string
	description?: string
}

export type AircraftType = {
	displayName?: string
	dn?: string
	cn?: string
	description?: string
}
