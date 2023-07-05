import { CategoryDto } from "./CategoryDTO"
import { UserDto } from "./UserDTO"

export type UpdateCompanyDto = {
	embCompanyCode: string
	companyName?: string
	embAddressNickname?: string
	country?: string
	state?: string
	example?: string
	city?: string
	address?: string
	postalCode?: string
	embURL?: string
	description?: string
	embInterestFlyEmbraer?: string
	embStatus?: string
	timeZone?: string
	companyAdministrator?: UserDto
	category?: CategoryDto
}
