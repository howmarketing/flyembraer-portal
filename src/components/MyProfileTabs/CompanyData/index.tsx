import { ChangeEvent, useState } from "react"

import { useGetCompanyByUser } from "api/company/getCompanyByUser"

import { Flex } from "components/Flex"

import { CompanyData } from "./CompanyData"
import { LegalRepresentativeTable } from "./LegalRepresentativeTable"

export const CompanyDataTab = () => {
	const INITIAL_VALUES = {
		displayName: "",
		location: "",
		state: "",
		address: "",
		country: "",
		representative: "",
	}

	const [companyData, setCompanyData] = useState(INITIAL_VALUES)

	useGetCompanyByUser({
		onSuccess(data) {
			setCompanyData({
				displayName: data.displayName || "", // name
				location: data.location || "", // city
				state: data.st || "", // state
				address: data.streetAddress || "", // address
				country: data.co || "", //country
				representative: data.embCompanyRepresentant || "", // country
			})
		},
		staleTime: 1000 * 60, // 1 min
		cacheTime: 1000 * 60, // 1 min
	})
	return (
		<Flex css={{ flexDirection: "column", gap: "56px" }}>
			<CompanyData {...companyData} />
			<LegalRepresentativeTable representative={companyData.representative} />
		</Flex>
	)
}
