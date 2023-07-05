import Head from "next/head"

import { ReactElement } from "react"

import { GetServices } from "api/job-function/getServices"
import { PostService } from "api/job-function/postService"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"
import { JobFunctionTable } from "components/PortalAdmin/JobFunction"

import type { NextPageWithLayout } from "pages/_app"

const JobFunction: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - J</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="JOB FUNCTIONS"
				moduleSearchApi={GetServices}
				moduleCreateApi={PostService}
				moduleTable={<JobFunctionTable />}
			/>
		</>
	)
}

export default JobFunction

JobFunction.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
