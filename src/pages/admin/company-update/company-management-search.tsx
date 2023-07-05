import { useState } from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Button from "components/Button"
import { Flex } from "components/Flex"
import TextField from "components/TextField"
import * as TableComponents from "components/Table/Table"
import { CountriesSelect } from "components/CountriesSelect"
import { useGetCompanyByObject } from "api/company/getCompanyByObject"
import { SelectCompanyStatus } from "components/SelectCompanyStatus/SelectCompanyStatus"
export const {
	Table,
	TD,
	TH,
	StyledTable,
	StyledTableCSS,
	StyledTableHeadRow,
	StyledTableHeadItemCSS,
	StyledTableHead,
	StyledTableHeadCSS,
	StyledTableBody,
	StyledTableBodyItem,
	StyledTableHeadItem,
} = TableComponents
// import { Table, TableBody, TableBodyItem, TableHead, TableHeadItem } from "components/Table/Table"

const CompanyManagementSearch = () => {
	const [data, setData] = useState<CompanyManagement>()

	const { data: companies } = useGetCompanyByObject({
		companyCountry: data?.companyCountry,
	})

	const companyManagementSchema = yup.object({
		companyDisplayName: yup.string().max(60, "Field may only contain 60 characters"),
		userDisplayName: yup.string().max(64, "Field may only contain 64 characters"),
		userMail: yup.string().email().max(40, "Field may only contain 40 characters"),
		companyCountry: yup.string(),
		application: yup.string().max(80, "Field may only contain 14 characters"),
		service: yup.string().max(80, "Field may only contain 14 characters"),
		companyEmbStatus: yup.string(),
	})

	type CompanyManagement = yup.InferType<typeof companyManagementSchema>

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CompanyManagement>({ resolver: yupResolver(companyManagementSchema) })

	const response = (data: CompanyManagement) => setData(data)

	return (
		<>
			<Flex
				as="form"
				css={{
					m: "12px",
					gap: "8px",
					flexDirection: "column",
				}}
				onSubmit={handleSubmit(response)}
			>
				<TextField
					id="companyDisplayName"
					error={errors.companyDisplayName?.message}
					{...register("companyDisplayName")}
				>
					Company name:
				</TextField>
				<TextField
					id="userDisplayName"
					error={errors.userDisplayName?.message}
					{...register("userDisplayName")}
				>
					Company administrator name:
				</TextField>
				<TextField id="userMail" error={errors.userMail?.message} {...register("userMail")}>
					Email:
				</TextField>
				<CountriesSelect
					id="companyCountry"
					label="Country:"
					error={errors.companyCountry?.message}
					{...register("companyCountry")}
				/>
				<TextField id="application" error={errors.application?.message} {...register("application")}>
					Application:
				</TextField>
				<TextField id="service" error={errors.service?.message} {...register("service")}>
					Services:
				</TextField>

				<SelectCompanyStatus
					id="companyEmbStatus"
					label="Company Status:"
					error={errors.companyEmbStatus?.message}
					{...register("companyEmbStatus")}
				/>

				<Button type="submit">SEARCH</Button>
			</Flex>

			{companies && (
				<StyledTable>
					<StyledTableHead>
						<StyledTableHeadItem>Company Name</StyledTableHeadItem>
						<StyledTableHeadItem>Company Address</StyledTableHeadItem>
						<StyledTableHeadItem>Company admin name</StyledTableHeadItem>
						<StyledTableHeadItem>Contact information</StyledTableHeadItem>
						<StyledTableHeadItem>Company status</StyledTableHeadItem>
						<StyledTableHeadItem>Last update</StyledTableHeadItem>
						<StyledTableHeadItem>Approval date</StyledTableHeadItem>
					</StyledTableHead>
					<StyledTableBody>
						{companies.map((company) => (
							<tr key={company.company_dn}>
								<StyledTableBodyItem>{company.company_displayName}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.company_streetAddress}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.user_displayName}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.user_mail}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.company_embStatus}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.company_lastupdatedate}</StyledTableBodyItem>
								<StyledTableBodyItem>{company.company_embApprovalDate}</StyledTableBodyItem>
							</tr>
						))}
					</StyledTableBody>
				</StyledTable>
			)}
		</>
	)
}

export default CompanyManagementSearch
