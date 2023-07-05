import Head from "next/head"

import { ReactElement, useEffect } from "react"

import type { NextPageWithLayout } from "./_app"

import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"

import { CustomizeHomeContextProvider } from "contexts/CustomizeHomeContext"

import { api } from "services/api"

import { HomeDashboard } from "templates/home/HomeDashboard"
import { UserDetailsBar } from "templates/home/UserDetailsBar"

const Home: NextPageWithLayout = () => {
	useEffect(() => {
		async function callSonarProfile() {
			api.get("https://sonarqube.dev.flyembraer.com/whoami")
				.then((response) => console.log(response))
				.catch((error) => console.error(error))
		}
		callSonarProfile()
	}, [])

	return (
		<>
			<Head>
				<title>Fly Embraer</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex css={{ flexDirection: "column", gap: "2rem" }}>
				<UserDetailsBar />
				<HomeDashboard />
			</Flex>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<LoggedLayout borderedPanel={false} css={{ height: "100%" }}>
			<CustomizeHomeContextProvider>{page}</CustomizeHomeContextProvider>
		</LoggedLayout>
	)
}
