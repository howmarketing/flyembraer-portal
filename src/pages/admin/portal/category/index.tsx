import Head from "next/head"

import { ReactElement } from "react"

import { PostCategory } from "api/category/postCategory"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"

import type { NextPageWithLayout } from "pages/_app"
import { getAllCategory } from "api/category/getAllCategory"
import { CategoryTable } from "components/PortalAdmin/Category"

const Aircraft: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Category</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="CATEGORY"
				moduleSearchApi={getAllCategory}
				moduleCreateApi={PostCategory}
				moduleTable={<CategoryTable />}
			/>
		</>
	)
}

export default Aircraft

Aircraft.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
