import Head from "next/head"

import { ReactElement } from "react"

import { getCategoryMarket } from "api/category/getCategoryMarkets"
import { postCategoryMarket } from "api/category/postCategoryMarket"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import PortalAdmin from "components/PortalAdmin"
import { MarketTypeTable } from "components/PortalAdmin/MarketType"

import type { NextPageWithLayout } from "pages/_app"

const MarketType: NextPageWithLayout = () => {
	return (
		<>
			<Head>
				<title>Fly Embraer - Market Type</title>
				<meta name="description" content="Fly Embraer 2.0" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<PortalAdmin
				moduleName="MARKET TYPE"
				moduleSearchApi={getCategoryMarket}
				moduleCreateApi={postCategoryMarket}
				moduleTable={<MarketTypeTable />}
			/>
		</>
	)
}

export default MarketType

MarketType.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
