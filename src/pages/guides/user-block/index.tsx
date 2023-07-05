import Head from "next/head"
import { ReactElement } from "react"
import Image from "next/future/image"

import { css, styled } from "../../../../stitches.config"
import { NextPageWithLayout } from "pages/_app"
import { LayoutDefault } from "components/Layouts/LayoutDefault"
import Text from "components/Text"
import { ArrowLeft } from "components/Icons/ArrowLeft"
import Link from "next/link"

const UserBlock: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Guides {">"} User Block and Unlock</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<StyledSection>
				<Text as="h1" size="xxl" weight="thin" color="brand-primary" css={{ margin: "2rem 0 4rem 0" }}>
					BLOCK AND UNLOCK USERS
				</Text>

				<StyledWrapper>
					<StyledStep>
						<StyledStepTitle>
							<StyledStepNumber>1</StyledStepNumber>
							<span>First, you must select administration and then user update.</span>
						</StyledStepTitle>

						<Image
							className={StyledImage()}
							src="/img/Guides/user-block/user-block-1.jpg"
							alt="guide image"
						/>
					</StyledStep>

					<StyledStep>
						<StyledStepTitle>
							<StyledStepNumber>2</StyledStepNumber>
							<span>The second step is to click on details on the chosen user.</span>
						</StyledStepTitle>

						<Image
							className={StyledImage()}
							src="/img/Guides/user-block/user-block-2.jpg"
							alt="guide image"
						/>
					</StyledStep>

					<StyledStep>
						<StyledStepTitle>
							<StyledStepNumber>3</StyledStepNumber>
							<span>
								Change the “Status” to blocked if you want to block, or processing if you want to
								unblock.
							</span>
						</StyledStepTitle>

						<Image
							className={StyledImage()}
							src="/img/Guides/user-block/user-block-3.jpg"
							alt="guide image"
						/>
					</StyledStep>

					<StyledStep>
						<StyledStepTitle>
							<StyledStepNumber>4</StyledStepNumber>
							<span>Click the save button.</span>
						</StyledStepTitle>

						<Image
							className={StyledImage()}
							width={980}
							src="/img/Guides/user-block/user-block-4.jpg"
							alt="guide image"
						/>
					</StyledStep>
				</StyledWrapper>
			</StyledSection>

			<Link href={"/guides"}>
				<StyledBackButton>
					<ArrowLeft width={8} height={16} fill={"#005AAF"} />
				</StyledBackButton>
			</Link>
		</>
	)
}

export default UserBlock

UserBlock.getLayout = function getLayout(page: ReactElement) {
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

const StyledWrapper = styled("div", {
	marginBottom: "6rem",
})

const StyledStep = styled("div", {
	marginBottom: "6rem",
})

const StyledStepTitle = styled("h3", {
	marginBottom: "1.5rem",
	display: "grid",
	gridTemplateColumns: "auto 1fr",
	gap: "1rem",
	alignItems: "center",
	fontWeight: "800",
	color: "$brand-primary",
})

const StyledStepNumber = styled("span", {
	fontSize: "2.25rem",
	fontWeight: "700",
})

const StyledImage = css("img", {
	width: "100%",
	maxWidth: "980px",
	objectFit: "contain",
	borderRadius: "1rem",
	border: "1px solid #005AAF65",
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
