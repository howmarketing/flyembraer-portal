import Head from "next/head"

import { ReactElement } from "react"

import { GetCategoryAircrafts } from "api/category/getCategoryAircrafts"
import { PostCategoryAircraft } from "api/category/postCategoryAircraft"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"

import type { NextPageWithLayout } from "pages/_app"
import { GetApplicationAdmin } from "api/job-function/getApplicationAdmin"
import { AssociationTable } from "components/PortalAdmin/Association"

const Aircraft: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Application</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="Application"
				moduleSearchApi={GetApplicationAdmin}
				//don't know which post method to use
				moduleCreateApi={PostCategoryAircraft}
				moduleTable={<AssociationTable />}
			/>
		</>
	)
}

export default Aircraft

Aircraft.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
