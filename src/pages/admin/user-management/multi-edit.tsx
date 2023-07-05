import React, { ReactElement } from "react"

import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { NextPageWithLayout } from "pages/_app"
import Text from "components/Text"
import { styled } from "@stitches/react"
import { useRouter } from "next/router"

const MultiEdit: NextPageWithLayout = () => {
	const router = useRouter()
	// const { name } = router.query
	const isAllEdit = true

	const options = ["Edit Services", "Approve Users", "Reprove Users", "Block Users"]

	const redirect = (index: number | undefined) => {
		if (index == 0) {
			router.push({ pathname: "/admin/user-management/service-selection", query: { isAllEdit } })
		} else if (index == 1) {
			router.push("/admin/user-management/approve-user")
		} else if (index == 2) {
			router.push("/admin/user-management/reprove-users")
		} else if (index == 3) {
			router.push("/admin/user-management/block-users")
		}
	}
	// Render the page numbers
	const renderOptions = Array.from(options).map((option, index) => (
		<Card key={index}>
			<Text
				color="brand-primary"
				css={{ fontSize: "15px", padding: "5px", marginTop: "10px", marginRight: "10px" }}
				onClick={() => redirect(index)}
			>
				{option}
			</Text>
		</Card>
	))

	return (
		<Flex css={{ flexDirection: "column" }}>
			<Text color="brand-primary" size="sm" weight="bold">
				{"USER MANAGEMENT > MULTI-EDIT"}
			</Text>

			<Text color="black" size="lg" weight="bold" css={{ marginTop: "20px" }}>
				{" "}
				Please choose an option:{" "}
			</Text>

			<Flex css={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", marginTop: "20px" }}>
				{renderOptions}
			</Flex>
		</Flex>
	)
}

export default MultiEdit
MultiEdit.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}

const Card = styled("article", {
	padding: "1rem",
	marginBottom: "1rem",
	marginRight: "20px",
	marginTop: "10px",
	textAlign: "center",
	borderRadius: "8px",
	backgroundColor: "#fff",
	boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
	transition: "all 0.3s ease",
})
