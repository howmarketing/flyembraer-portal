import Link from "next/link"
import Head from "next/head"
import { ReactElement, useState } from "react"

import { styled } from "../../../stitches.config"
import { NextPageWithLayout } from "pages/_app"
import { LayoutDefault } from "components/Layouts/LayoutDefault"
import Text from "components/Text"
import { Guide } from "components/Icons/Guide"
import { ArrowUp } from "components/Icons/ArrowUp"
import { ArrowDown } from "components/Icons/ArrowDown"
import { ArrowLeft } from "components/Icons/ArrowLeft"

const Guides: NextPageWithLayout = () => {
	const [registrationOpened, setRegistrationToggle] = useState(true)
	const [userOpened, setUserToggle] = useState(true)
	const [companyOpened, setCompanyToggle] = useState(true)

	return (
		<>
			<Head>
				<title>Fly Embraer - Guides</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StyledSection>
				<Text as="h1" size="xxl" weight="thin" color="brand-primary" css={{ marginBottom: "4rem" }}>
					GUIDES
				</Text>

				<StyledPanel>
					<StyledPanelHeader>
						<StyledPanelToggle
							onClick={() => setRegistrationToggle((registrationOpened) => !registrationOpened)}
						>
							REGISTRATION {registrationOpened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
						</StyledPanelToggle>
					</StyledPanelHeader>
				</StyledPanel>

				<div style={registrationOpened ? { display: "block" } : { display: "none" }}>
					<StyledWrapper>
						<Link href={"/guides/registration"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>REGISTRATION</span>
							</StyledButton>
						</Link>
					</StyledWrapper>
				</div>

				<StyledPanel>
					<StyledPanelHeader>
						<StyledPanelToggle onClick={() => setUserToggle((userOpened) => !userOpened)}>
							USER {userOpened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
						</StyledPanelToggle>
					</StyledPanelHeader>
				</StyledPanel>

				<div style={userOpened ? { display: "block" } : { display: "none" }}>
					<StyledWrapper>
						<Link href={"/guides/user-management"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>USER MANAGEMENT</span>
							</StyledButton>
						</Link>
						<Link href={"/guides/user-block"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>USER BLOCK AND UNLOCK</span>
							</StyledButton>
						</Link>
						<Link href={"/guides/user-approve"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>USER APPROVE AND REJECT</span>
							</StyledButton>
						</Link>
						<Link href={"/guides/user-profile"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>USER PROFILE</span>
							</StyledButton>
						</Link>
					</StyledWrapper>
				</div>

				<StyledPanel>
					<StyledPanelHeader>
						<StyledPanelToggle onClick={() => setCompanyToggle((companyOpened) => !companyOpened)}>
							COMPANY {companyOpened ? <ArrowUp width={14} /> : <ArrowDown width={14} />}
						</StyledPanelToggle>
					</StyledPanelHeader>
				</StyledPanel>

				<div style={companyOpened ? { display: "block" } : { display: "none" }}>
					<StyledWrapper>
						<Link href={"/guides/company-management"}>
							<StyledButton>
								<Guide fill={"#005AAF"} /> <span>COMPANY MANAGEMENT</span>
							</StyledButton>
						</Link>
					</StyledWrapper>
				</div>
			</StyledSection>

			<Link href={"/"}>
				<StyledBackButton>
					<ArrowLeft width={8} height={16} fill={"#005AAF"} />
				</StyledBackButton>
			</Link>
		</>
	)
}

export default Guides

Guides.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}

const StyledSection = styled("section", {
	maxWidth: "2048px",
	margin: "0 auto",
	padding: "5vw 6vw",

	"@maxWeb": {
		padding: "4rem 1rem",
	},
})

const StyledPanel = styled("div", {
	margin: "2.5rem 0",
})

const StyledPanelHeader = styled("div", {
	marginBottom: "12px",
	borderBottom: "1px solid #005AAF",
})

const StyledPanelToggle = styled("button", {
	border: "none",
	lineHeight: "40px",
	fontSize: "20px",
	backgroundColor: "transparent",
	cursor: "pointer",
})

const StyledWrapper = styled("div", {
	marginBottom: "4rem",
	display: "grid",
	gridTemplateColumns: "1fr 1fr 1fr",
	gap: "2rem",
	justifyContent: "flex-start",

	"@maxDesktop": {
		gridTemplateColumns: "1fr 1fr",
	},

	"@maxWeb": {
		gridTemplateColumns: "1fr",
	},
})

const StyledButton = styled("button", {
	padding: "1.5rem",
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	gap: "0.75rem",
	alignItems: "center",
	borderRadius: "1rem",
	border: "1px solid #005AAF65",
	textAlign: "left",
	fontSize: "clamp(1rem, 1.1vw, 1.15rem)",
	backgroundColor: "transparent",
	color: "$brand-primary",

	"&:hover": {
		border: "1px solid #005AAFBB",
	},
})

const StyledBackButton = styled("button", {
	position: "absolute",
	top: "1.25rem",
	left: "1.25rem",
	zIndex: "8",
	width: "40px",
	height: "40px",
	border: "none",
	borderRadius: "50%",
	backgroundColor: "#005AAF10",

	"&:hover": {
		backgroundColor: "#005AAF20",
	},

	"@maxWeb": {
		left: "0",
	},
})
