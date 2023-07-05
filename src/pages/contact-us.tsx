import Head from "next/head"

import { ReactElement } from "react"

import type { NextPageWithLayout } from "./_app"

import { AirplaneBackground } from "components/Background"
import Button from "components/Button"
import { Flex } from "components/Flex"
import { LayoutDefault } from "components/Layouts/LayoutDefault"
import Text from "components/Text"
import TextArea from "components/TextArea"
import TextField from "components/TextField"

import { styled } from "../../stitches.config"
import { MediaMatch } from "components/MediaMatch"
import { ArrowLeft } from "components/Icons/ArrowLeft"
import Link from "next/link"

const ContactUs: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Wrapper>
				<AirplaneBackground />
				<MediaMatch lessThan="tablet">
					<ContentWrapper>
						<Content>
							<Flex
								css={{
									margin: "0 20px 40px",
									flexDirection: "column",
									gap: "",
									"@tablet": { margin: "0 0 40px" },
								}}
							>
								<Text as="p" weight="thin" size="xxl" color="brand-secondary" css={{ mb: "12px" }}>
									Contact us
								</Text>
								<Text as="p" css={{ mb: "16px" }}>
									If you need assistance with login and other access related issues, we also have the
									following channels:
								</Text>
								<Text as="p">
									Phone: <Text css={{ color: "$brand-primary" }}>+55 12 3313 2337</Text>
								</Text>
								<Text as="p">
									E-mail: <Text css={{ color: "$brand-primary" }}>support@flyembraer.com</Text>
								</Text>
								<Text as="p">
									USA/CANADA toll free:<Text css={{ color: "$brand-primary" }}> 1 866 270 AERO</Text>
								</Text>
							</Flex>

							<Flex
								css={{
									flexDirection: "column",
									alignItems: "flex-start",
									gap: "16px",
									width: "fit-content",
								}}
							>
								<TextField id="Name" placeholder="Your name" css={{ width: "320px" }}>
									Your name
								</TextField>
								<TextField id="administratorFullName" placeholder="Subject" css={{ width: "320px" }}>
									Subject
								</TextField>
								<TextArea
									id="administratorFullName"
									placeholder="Your message"
									css={{ width: "320px" }}
								>
									Your message
								</TextArea>
								<Button type="submit" css={{ ml: "auto" }}>
									Send message
								</Button>
							</Flex>
						</Content>
					</ContentWrapper>
				</MediaMatch>
				<MediaMatch greaterThan="tablet">
					<ContentWrapper>
						<Content>
							<Flex
								css={{
									margin: "0 20px 40px",
									flexDirection: "column",
									gap: "",
									"@tablet": { margin: "0 0 40px" },
								}}
							>
								<Text as="p" weight="thin" size="xxl" color="brand-secondary" css={{ mb: "12px" }}>
									Contact us
								</Text>
								<Text as="p" css={{ mb: "16px" }}>
									If you need assistance with login and other access related issues, we also have the
									following channels:
								</Text>
								<Text as="p" css={{}}>
									Phone: <Text css={{ color: "$brand-primary" }}>+55 12 3313 2337</Text>
								</Text>
								<Text as="p" css={{}}>
									E-mail: <Text css={{ color: "$brand-primary" }}>support@flyembraer.com</Text>
								</Text>
								<Text as="p" css={{}}>
									USA/CANADA toll free:<Text css={{ color: "$brand-primary" }}> 1 866 270 AERO</Text>
								</Text>
							</Flex>

							<Flex css={{ flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
								<TextField id="Name" placeholder="Your name" css={{ width: "520px" }}>
									Your name
								</TextField>
								<TextField id="administratorFullName" placeholder="Subject" css={{ width: "520px" }}>
									Subject
								</TextField>
								<TextArea
									id="administratorFullName"
									placeholder="Your message"
									css={{ width: "520px" }}
								>
									Your message
								</TextArea>
								<Button type="submit" css={{ ml: "auto" }}>
									Send message
								</Button>
							</Flex>
						</Content>
					</ContentWrapper>
				</MediaMatch>
			</Wrapper>

			<Link href={"/"}>
				<StyledBackButton>
					<ArrowLeft width={8} height={16} fill={"#005AAF"} />
				</StyledBackButton>
			</Link>
		</>
	)
}
const Wrapper = styled("div", {
	width: "100%",
	height: "100%",
})

const ContentWrapper = styled("div", {
	width: "100%",
	height: "100%",
	py: "2rem",
	position: "relative",
})

const Content = styled("div", {
	width: "580px",
	height: "auto",
	p: "22px 24px",
	mx: "auto",
	br: "0.5rem",

	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between",

	bg: "$white",
	border: "1px solid #A3B5BF",

	"& button": {
		margin: "0 auto",
	},

	"@mobile": {
		padding: "1rem",
		maxWidth: "100%",
	},
})

const StyledBackButton = styled("button", {
	position: "absolute",
	top: "1rem",
	left: "1.15rem",
	zIndex: "8",
	width: "40px",
	height: "40px",
	border: "none",
	borderRadius: "50%",
	backgroundColor: "#FFFFFF40",

	"&:hover": {
		backgroundColor: "#FFFFFF80",
	},
})

export default ContactUs

ContactUs.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}
