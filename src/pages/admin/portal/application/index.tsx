import Head from "next/head"

import { ReactElement } from "react"

import { GetCategoryAircrafts } from "api/category/getCategoryAircrafts"
import { PostCategoryAircraft } from "api/category/postCategoryAircraft"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"

import type { NextPageWithLayout } from "pages/_app"
import { ApplicationTable } from "components/PortalAdmin/Application"
import { GetApplications } from "api/job-function/getApplications"

const Aircraft: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Application</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="APPLICATION"
				moduleSearchApi={GetApplications}
				//this should be post application company
				moduleCreateApi={PostCategoryAircraft}
				moduleTable={<ApplicationTable />}
			/>
		</>
	)
}

export default Aircraft

Aircraft.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
