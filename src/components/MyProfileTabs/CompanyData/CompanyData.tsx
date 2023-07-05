import { GetCompanyUserResponse } from "api/company/getCompanyByUser"

import { Flex } from "components/Flex"
import Text from "components/Text"
import TextField from "components/TextField"

type CompanyDataProps = {
	displayName: string
	location: string
	state: string
	address: string
	country: string
	representative: string
}

export const CompanyData = (companyData: CompanyDataProps) => {
	return (
		<Flex css={{ flexDirection: "column", gap: "20px" }}>
			<Flex
				css={{
					justifyContent: "center",
					"@tablet": {
						justifyContent: "flex-start",
					},
				}}
			>
				<Text weight="bold" size="sm" color="brand-primary">
					COMPANY DATA
				</Text>
			</Flex>

			<Flex
				css={{
					flexDirection: "column",
					gap: "20px",
					"@tablet": {
						flexDirection: "row",
					},
				}}
			>
				<TextField id="displayName" value={companyData.displayName} disabled={true}>
					Company name
				</TextField>
				<TextField id="country" value={companyData.country} disabled={true}>
					Country
				</TextField>
			</Flex>

			<Flex
				css={{
					flexDirection: "column",
					gap: "20px",
					"@tablet": {
						flexDirection: "row",
					},
				}}
			>
				<TextField id="state" value={companyData.state} disabled={true}>
					State/Province
				</TextField>
				<TextField id="location" value={companyData.location} disabled={true}>
					City
				</TextField>
			</Flex>

			<Flex
				css={{
					flexDirection: "column",
					gap: "20px",
					"@tablet": {
						flexDirection: "row",
					},
				}}
			>
				<TextField id="address" value={companyData.address} disabled={true}>
					Address
				</TextField>
				<TextField id="representative" value={companyData.representative} disabled={true}>
					Company Representative
				</TextField>
			</Flex>
		</Flex>
	)
}
