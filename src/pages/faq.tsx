import Head from "next/head"
import Link from "next/link"

import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

import { LayoutDefault } from "components/Layouts/LayoutDefault"

import Text from "components/Text"

import { styled } from "../../stitches.config"

const Faq: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<Box
					css={{
						"@tablet": {
							width: "88%",
							margin: "0 auto",
						},
						"@desktop": {
							width: "100%",
							maxWidth: "1280px",
							margin: "0 auto",
						},
					}}
				>
					<Flex
						css={{
							margin: "16px 20px 40px",
							flexDirection: "column",
							gap: "16px",
							"@tablet": { margin: "0 0 40px" },
						}}
					>
						<Text
							css={{
								color: "#00327F",
								fontSize: "18px",
								lineHeight: "48px",
								fontWeight: "300",
								"@web": {
									fontSize: "32px",
									fontWeight: "300",
									lineHeight: "100px",
								},
							}}
						>
							Frequently asked questions
						</Text>
						<Text css={{ lineHeight: "32px" }}>
							<li
								style={{
									listStyleType: "disc",
									marginBottom: "12px",
									fontSize: "20px",
									fontWeight: 700,
								}}
							>
								How do I bookmark a file?
							</li>
							<Text color={"brand-secondary"}>
								Pellentesque imperdiet vehicula rhoncus. Mauris id justo eget nulla porttitor lobortis
								eget porttitor enim. Proin dolor risus, interdum id euismod nec, mollis vel est.{" "}
							</Text>
							<li
								style={{
									listStyleType: "disc",
									marginBottom: "12px",
									fontSize: "20px",
									fontWeight: 700,
								}}
							>
								How do I search for a file?
							</li>
							<Rectangle />
							<Text color={"brand-secondary"}>
								Pellentesque imperdiet vehicula rhoncus. Mauris id justo eget nulla porttitor lobortis
								eget porttitor enim. Proin dolor risus, interdum id euismod nec, mollis vel est.{" "}
							</Text>
							<li
								style={{
									listStyleType: "disc",
									marginBottom: "12px",
									fontSize: "20px",
									fontWeight: 700,
								}}
							>
								How do I change password?
							</li>
							<Text color={"brand-secondary"}>
								Pellentesque imperdiet vehicula rhoncus. Mauris id justo eget nulla porttitor lobortis
								eget porttitor enim. Proin dolor risus, interdum id euismod nec, mollis vel est.{" "}
							</Text>
							<li
								style={{
									listStyleType: "disc",
									marginBottom: "12px",
									fontSize: "20px",
									fontWeight: 700,
								}}
							>
								How do I customize my home page?
							</li>
							<Rectangle />
							<Text color={"brand-secondary"}>
								Pellentesque imperdiet vehicula rhoncus. Mauris id justo eget nulla porttitor lobortis
								eget porttitor enim. Proin dolor risus, interdum id euismod nec, mollis vel est.{" "}
							</Text>
						</Text>

						<hr style={{ border: "1px solid #005AAF" }} />

						<Text
							css={{
								color: "#00327F",
								fontSize: "18px",
								lineHeight: "48px",
								fontWeight: "300",
								"@web": {
									fontSize: "32px",
									fontWeight: "300",
									textAlign: "center",
								},
							}}
						>
							Still need assistance?
							<Link href="/contact-us">
								<StyledLink>Contact us</StyledLink>
							</Link>
						</Text>
					</Flex>
				</Box>
			</>
		</>
	)
}
const Flex = styled("div", {
	display: "flex",
})

const Box = styled("div", {})

const Rectangle = styled("div", {
	width: "400px",
	height: "100px",
	padding: "26px 20px 18px",
	display: "flex",
	flexDirection: "column",
	gap: "28px",
	background: "$gray100",
})

const StyledLink = styled("a", {
	fontWeight: "300",
	fontSize: "32px",
	lineHeight: "48px",
	color: "#00327F",
	textDecoration: "underline",
	cursor: "pointer",
	marginLeft: "8px",
})

export default Faq

Faq.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}
