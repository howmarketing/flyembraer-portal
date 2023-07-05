import { AircraftType, BusinessCompanyType, Market } from "./AllUsers"

export type Company = {
	ou?: string
	cn?: string
	dn?: string
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
	embWantedBCT?: BusinessCompanyType
	embWantedMarket?: Market
	embWantedAirCraft?: AircraftType
	embCompanyRepresentant?: string
	embStatus?: string
	embLastDateStatus?: string
	embCreationDate?: string
	embMarket?: string[]
}
