import Head from "next/head"

import { ReactElement, useEffect, useState } from "react"

import { NextPageWithLayout } from "./_app"

import { AircraftInformationSection } from "components/AircraftInformationSection"
import Button from "components/Button"
import { Flex } from "components/Flex"
import { Hero } from "components/Hero"
import { LayoutDefault } from "components/Layouts/LayoutDefault"
import { LoginFrame } from "components/LoginFrame"

const Home: NextPageWithLayout = () => {
	const [showAuxiliarButton, setShowAuxiliarButton] = useState(false)

	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Shift" && e.ctrlKey) {
				setShowAuxiliarButton((prevState) => !prevState)
			}
		}
		document.addEventListener("keydown", handleKeyDown)

		return () => document.removeEventListener("keydown", handleKeyDown)
	}, [])
	return (
		<>
			<Head>
				<title>Fly Embraer</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero />
			{showAuxiliarButton ? (
				<Flex
					css={{
						width: "100vw",
						height: "512px",
						position: "absolute",
						inset: 0,
						display: "grid",
						placeContent: "center",
						cursor: "pointer",
						zIndex: 10,
					}}
				>
					<Button
						as="a"
						href="https://sonarqube.dev.flyembraer.com/login"
						css={{ padding: "64px", fontSize: "32px", width: "100%" }}
					>
						LOG IN
					</Button>
				</Flex>
			) : null}
			<LoginFrame />
			<AircraftInformationSection />
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <LayoutDefault>{page}</LayoutDefault>
}
