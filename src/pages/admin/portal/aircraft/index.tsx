import Head from "next/head"

import { ReactElement } from "react"

import { GetCategoryAircrafts } from "api/category/getCategoryAircrafts"
import { PostCategoryAircraft } from "api/category/postCategoryAircraft"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"
import { AircraftTable } from "components/PortalAdmin/Aircraft"

import type { NextPageWithLayout } from "pages/_app"

const Aircraft: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Aircraft</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="AIRCRAFT"
				moduleSearchApi={GetCategoryAircrafts}
				moduleCreateApi={PostCategoryAircraft}
				moduleTable={<AircraftTable />}
			/>
		</>
	)
}

export default Aircraft

Aircraft.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
