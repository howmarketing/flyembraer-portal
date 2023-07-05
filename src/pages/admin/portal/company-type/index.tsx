import Head from "next/head"

import { ReactElement } from "react"

import { getCategoryBct } from "api/category/getCategoryBcts"
import { postCategoryBct } from "api/category/postCategoryBct"

import { CompanyTypeTable } from "components/PortalAdmin/CompanyType"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"

import type { NextPageWithLayout } from "pages/_app"

const CompanyType: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Company Type</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="COMPANY TYPE"
				moduleSearchApi={getCategoryBct}
				moduleCreateApi={postCategoryBct}
				moduleTable={<CompanyTypeTable />}
			/>
		</>
	)
}

export default CompanyType

CompanyType.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
