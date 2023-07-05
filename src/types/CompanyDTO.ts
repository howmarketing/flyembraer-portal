import { UserDto } from "./UserDTO"

export type CompanyDto = {
	companyName: string
	embAddressNickname: string
	country: string
	state: string
	city: string
	address: string
	postalCode: string
	embURL?: string
	description?: string
	embInterestFlyEmbraer?: string
	timeZone?: string
	companyDomain: string[]
	companyAdministrator: UserDto
	category?: Category
}

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
	embWantedBCT?: string[]
	embWantedMarket?: string[]
	embWantedAirCraft?: string[]
	embCompanyRepresentant?: string
	embStatus?: string
	embLastDateStatus?: string
}

type Category = {
	embWantedBCT?: string[]
	embWantedMarket?: string[]
	embWantedAirCraft?: string[]
}
