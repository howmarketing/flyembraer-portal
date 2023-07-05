/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, useState } from "react"

import Button from "components/Button"
import { Description } from "components/Icons/Description"
import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import type { NextPageWithLayout } from "pages/_app"
import { SelectAction } from "components/SelectAction/SelectAction"
import Text from "components/Text"
import TextField from "components/TextField"
import { styled } from "@stitches/react"
import { useRouter } from "next/router"
// import { SelectPrefix } from "components/SelectPrefix/SelectPrefix"
// import {CompanySelect} from "components/SelectCompanyName/CompanySelect"
// import { Select } from "components/Select";
// import Spinner from "components/Spinner"

const ServiceSelection: NextPageWithLayout = () => {
	const router = useRouter()
	const [selectedRows, setSelectedRows] = useState<Array<any>>([])
	const [filteredArray, setFilteredArray] = useState<Array<any>>([])
	const [isOptionSelected, setOptionSelected] = useState<boolean | undefined>(undefined)

	const isAllEdit = router.query.isAllEdit === "true"
	const serviceList1 = [
		{
			id: 1,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 2,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 3,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
	]
	const serviceList2 = [
		{
			id: 4,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 5,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 6,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
	]
	const serviceList = [
		{
			id: 7,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 8,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
		{
			id: 9,
			name: "Ahead executive - customer",
			contactInfo: "pedrofernandes@embaer.com",
			lastUpdate: "11 Mar 2022",
			status: "Active",
		},
	]

	const list = [
		{ applicationName: "Ahead executive", serviceName: serviceList1, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList2, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
		{ applicationName: "Ahead executive", serviceName: serviceList, description: "" },
	]
	const handleRowSelect = (id: number | string | unknown | undefined) => {
		const newSelectedRows = [...selectedRows]
		const index = newSelectedRows.indexOf(id)

		if (index === -1) {
			newSelectedRows.push(id)
		} else {
			newSelectedRows.splice(index, 1)
		}

		setSelectedRows(newSelectedRows)
	}

	const handleBack = () => {
		router.back()
	}

	const handleNext = () => {
		const wholeService = serviceList1.concat(serviceList2).concat(serviceList)

		const selectedArray = wholeService.filter((value) => selectedRows.includes(value.id))
		console.log(selectedArray.length)
		if (selectedArray.length > 0) {
			setFilteredArray(selectedArray)
			setOptionSelected(!isOptionSelected)
		}
	}

	const handleSelectedBack = () => {
		setFilteredArray([])
		setOptionSelected(!isOptionSelected)
	}

	function generateSelectedOptions() {
		return (
			<Table>
				<EvenRow>
					<Th></Th>
					<Th>Name</Th>
					<Th>Contact information</Th>
					<Th>Last update</Th>
					<Th>Status</Th>
				</EvenRow>
				<TBody>
					{filteredArray.map((item, index) => (
						<EvenRow key={index}>
							<Td>
								<Input type="checkbox" />
							</Td>
							<Td>{item.name}</Td>
							<Td>{item.contactInfo}</Td>
							<Td>{item.lastUpdate}</Td>
							<Td>{item.status}</Td>
						</EvenRow>
					))}
				</TBody>
			</Table>
		)
	}

	function createList() {
		return (
			<Table>
				<EvenRow>
					<Th>Application Name</Th>
					<Th>Service Name</Th>
					<Th>Description</Th>
				</EvenRow>
				<TBody>
					{list.map((item, index) => (
						<EvenRow
							key={item.serviceName.map((service) => service?.id || service.name || index).join(";")}
						>
							<Td>{item.applicationName}</Td>

							{item.serviceName.map((service, index1) => (
								<EvenRow key={index1}>
									<Input
										type="checkbox"
										checked={selectedRows.includes(service.id)}
										onChange={() => handleRowSelect(service.id)}
									/>
									{service.name}
								</EvenRow>
							))}

							<Td>
								{item.serviceName.map((service) => (
									<EvenRow key={service.id} css={{ margin: "20px" }}>
										<Flex css={{ padding: "10px" }}>
											<Description width="25px" height="25px" />
										</Flex>
									</EvenRow>
								))}
							</Td>
						</EvenRow>
					))}
				</TBody>
			</Table>
		)
	}

	return (
		<Flex css={{ flexDirection: "column" }}>
			{isOptionSelected ? (
				<Flex css={{ flexDirection: "column" }}>
					<Text color="brand-primary" size="sm" weight="bold">
						{"USER MANAGEMENT > MULTI-EDIT > SERVICE SELECTION"}
					</Text>
					<Flex css={{ flexDirection: "row", marginTop: "30px" }}>{generateSelectedOptions()}</Flex>
					<Flex css={{ flexDirection: "row" }}>
						<Button
							variant="secondary"
							css={{ margin: "10px", width: "100px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
							onClick={handleSelectedBack}
						>
							Back
						</Button>
						<Button variant="primary" css={{ margin: "10px", width: "100px" }}>
							Next
						</Button>
					</Flex>
				</Flex>
			) : (
				<Flex css={{ flexDirection: "column" }}>
					<Text color="brand-primary" size="sm" weight="bold">
						{"USER MANAGEMENT > MULTI-EDIT > SERVICE SELECTION"}
					</Text>

					<Flex css={{ flexDirection: "row", marginTop: "30px" }}>
						{isAllEdit ? (
							<TextField
								id="companyName"
								disabled={true}
								value="All"
								css={{ width: "50%", paddingBottom: "15px", marginRight: "10px" }}
							>
								Company Name :
							</TextField>
						) : (
							<TextField
								id="companyName"
								disabled={true}
								value={JSON.parse((router.query?.object || JSON.stringify({})) as string).companyName}
								css={{ width: "50%", paddingBottom: "15px", marginRight: "10px" }}
							>
								Company Name :
							</TextField>
						)}

						<SelectAction
							id="action"
							label="Action:"
							css={{ width: "50%", paddingBottom: "15px", marginRight: "10px" }}
						/>
					</Flex>

					{createList()}

					<Flex css={{ right: "0" }}>
						<Button
							variant="secondary"
							css={{ margin: "10px", width: "100px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
							onClick={handleBack}
						>
							Back
						</Button>
						<Button variant="primary" css={{ margin: "10px", width: "100px" }} onClick={handleNext}>
							Next
						</Button>
					</Flex>
				</Flex>
			)}
		</Flex>
	)
}

export default ServiceSelection

ServiceSelection.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}

const Table = styled("table", {
	borderCollapse: "collapse",
	width: "100%",
	borderSpacing: 0,
	flexDirection: "column",
})

const Th = styled("th", {
	padding: 12,
	border: "1px solid #DADCE0",
	borderLeft: "0px solid",
	fontSize: "12px",
	borderTop: "0px solid",
	borderRight: "0px solid",
	textAlign: "left",
	color: "#000",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
})

const TBody = styled("body", {
	border: "1px solid",
	display: "contents",
})

const Td = styled("td", {
	color: "#252631",
	padding: "10px",
	fontSize: "12px",
	border: "0px solid #DADCE0",
	borderLeft: "0px solid",
	borderRight: "0px solid",
	borderTop: "0px solid",
	textAlign: "left",
	whiteSpace: "nowrap",
	textOverflow: "ellipsis",
})

const EvenRow = styled("tr", {
	padding: "10px",
})

const Input = styled("input", {
	backgroundColor: "#f2f2f2",
	border: "none",
	margin: "15px",
	padding: "10px",
	borderRadius: "5px",
	fontSize: "16px",
	color: "#333",
})
