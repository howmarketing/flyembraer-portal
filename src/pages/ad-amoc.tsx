import Head from "next/head"

import { ReactElement } from "react"

import { NextPageWithLayout } from "./_app"

import { Flex } from "components/Flex"
import { LoggedLayout } from "components/Layouts/LoggedLayout"

const ADAMOC: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - AD&AMOC</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Flex css={{ width: "100%", height: "100%", justifyContent: "center", alignItems: "center" }}>
				<iframe
					src="https://ad.qas.flyembraer.com/Certification/Authorities/General/AD/FlyEmbraer/index.cfm"
					width={475}
					height={500}
					frameBorder="0"
				/>
			</Flex>
		</>
	)
}

export default ADAMOC

ADAMOC.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
