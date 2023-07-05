import { createContext, ReactNode, useState } from "react"

export type CustomizeHomeContextValues = {
	customizationActive: boolean
	handleSetCustomizationActive: (value: boolean) => void
}

export const CustomizeHomeContext = createContext<CustomizeHomeContextValues>({} as CustomizeHomeContextValues)

export const CustomizeHomeContextProvider = ({ children }: { children: ReactNode }) => {
	const [customizationActive, setCustomizationActive] = useState(false)

	function handleSetCustomizationActive(value: boolean) {
		setCustomizationActive(value)
	}

	return (
		<CustomizeHomeContext.Provider value={{ customizationActive, handleSetCustomizationActive }}>
			{children}
		</CustomizeHomeContext.Provider>
	)
}
