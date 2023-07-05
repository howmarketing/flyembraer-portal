/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "components/Button"
import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import Text from "components/Text"
import TextField from "components/TextField"
import { styled } from "@stitches/react"
import { useRouter } from "next/router"
import type { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
// import { Select } from "components/Select";
// import {SelectProfile} from 'components/SelectProfile/SelectProfile'

const BlockUsers: NextPageWithLayout = () => {
	const serviceList = [
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
	const router = useRouter()
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
					{serviceList.map((item, index) => (
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
	const handleBack = () => {
		router.back()
	}

	return (
		<Flex css={{ flexDirection: "column" }}>
			<Text color="brand-primary" size="sm" weight="bold">
				{" "}
				{"USER MANAGEMENT > MULTI-EDIT > BLOCK USER"}
			</Text>

			<TextField
				id="companyName"
				disabled={true}
				value="All"
				css={{ width: "20%", paddingBottom: "15px", marginRight: "10px", marginTop: "30px" }}
			>
				Company Name :
			</TextField>
			{generateSelectedOptions()}
			<TextField id={"Comments"}>Comments*</TextField>
			<Flex css={{ right: "0" }}>
				<Button
					variant="secondary"
					css={{ margin: "10px", width: "100px", whiteSpace: "nowrap", textOverflow: "ellipsis" }}
					onClick={handleBack}
				>
					Back
				</Button>
				<Button variant="primary" css={{ margin: "10px", width: "100px" }}>
					Next
				</Button>
			</Flex>
		</Flex>
	)
}

export default BlockUsers

BlockUsers.getLayout = function getLayout(page: ReactElement) {
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

const InputFocus = styled(Input, {
	outline: "none",
	boxShadow: "0 0 2px 2px #ccc",
})
