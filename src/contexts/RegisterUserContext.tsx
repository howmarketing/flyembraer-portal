import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"

import type { PostUserProps } from "api/user/postUser"

export type RegisterUserFormData = PostUserProps

type RegisterUserContextProps = {
	data: RegisterUserFormData
	setData: Dispatch<SetStateAction<RegisterUserFormData>>
	reset: () => void
}

const initialValues: RegisterUserFormData = {
	prefix: "Mr.",
	fullName: "",
	jobTitle: "",
	email: "",
	emailConfirmation: "",
	email2: "",
	phone: "",
	ddi: "",
	ddi2: "",
	phone2: "",
	phoneExtension: "",
	phoneExtension2: "",
	country: "",
	state: "",
	city: "",
	address: "",
	postalCode: "",
	embNameCompany: "",
	embNameCompanyAdmin: "",
}

export const RegisterUserContext = createContext<RegisterUserContextProps>({} as RegisterUserContextProps)

export const RegisterUserContextProvider = ({ children }: { children: ReactNode }) => {
	const [data, setData] = useState<RegisterUserFormData>(initialValues)

	function reset() {
		setData(initialValues)
	}

	return <RegisterUserContext.Provider value={{ data, setData, reset }}>{children}</RegisterUserContext.Provider>
}
