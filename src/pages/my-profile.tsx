import Head from "next/head"

import { ReactElement } from "react"

import type { NextPageWithLayout } from "./_app"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { MyProfileTab } from "components/MyProfileTabs/MyProfile"
import { MyServicesTab } from "components/MyProfileTabs/MyServices"
import { CompanyDataTab } from "components/MyProfileTabs/CompanyData"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/Tabs"

import { styled } from "../../stitches.config"

const MyProfile: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - My Profile</title>
			</Head>
			<StyledTab defaultValue="MY PROFILE">
				<StyledTabList>
					<StyledTabTrigger value="MY PROFILE">MY PROFILE</StyledTabTrigger>
					<StyledTabTrigger value="MY SERVICES">MY SERVICES</StyledTabTrigger>
					<StyledTabTrigger value="COMPANY INFO">COMPANY INFO</StyledTabTrigger>
				</StyledTabList>

				<TabsContent value="MY PROFILE">
					<MyProfileTab />
				</TabsContent>

				<TabsContent value="MY SERVICES">
					<MyServicesTab />
				</TabsContent>

				<TabsContent value="COMPANY INFO">
					<CompanyDataTab />
				</TabsContent>
			</StyledTab>
		</>
	)
}

export default MyProfile

MyProfile.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}

const StyledTab = styled(Tabs, {
	display: "flex",
	flexDirection: "column",
	gap: "38px",
})

const StyledTabTrigger = styled(TabsTrigger, {
	all: "unset",
	appearance: "none",
	color: "#778CA2",
	fontWeight: "$normal",
	textAlign: "center",
	cursor: "pointer",

	"&:not([data-state='active']):hover": {
		filter: "brightness(0.9)",
	},

	"&[data-state='active']": {
		fontWeight: "bold",
		position: "relative",

		"&::after": {
			content: "",
			width: "100%",
			height: "4px",
			backgroundColor: "$brand-primary",
			position: "absolute",
			bottom: "-12px",
			left: 0,
		},
	},
})

const StyledTabList = styled(TabsList, {
	display: "flex",
	gap: "2rem",
})
