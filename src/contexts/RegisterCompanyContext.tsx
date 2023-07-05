import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import type { CompanyDto } from "types/CompanyDTO"

type RegisterCompanyContextProps = {
	data: CompanyDto
	setData: Dispatch<SetStateAction<CompanyDto>>
}

export const RegisterCompanyContext = createContext<RegisterCompanyContextProps>({} as RegisterCompanyContextProps)

const initialValues: CompanyDto = {
	companyName: "",
	embAddressNickname: "",
	country: "",
	postalCode: "",
	state: "",
	city: "",
	address: "",
	embURL: "",
	category: {
		embWantedBCT: ["FLYEMBRAER GROUP COMPANY"],
	},
	description: "",
	embInterestFlyEmbraer: "",
	companyDomain: [""],
	companyAdministrator: {
		prefix: "mr",
		fullName: "",
		jobTitle: "",
		email: "",
		emailConfirmation: "",
		email2: "",
		phone: "",
		phoneExtension: "",
		phone2: "",
		phoneExtension2: "",
	},
}

export const RegisterCompanyContextProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<CompanyDto>(initialValues)

	return <RegisterCompanyContext.Provider value={{ data, setData }}>{children}</RegisterCompanyContext.Provider>
}
