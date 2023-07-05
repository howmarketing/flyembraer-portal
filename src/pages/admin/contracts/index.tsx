import { ReactElement } from "react"

import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { NextPageWithLayout } from "pages/_app"

const Contracts: NextPageWithLayout = () => {
	return <>Contracts Works!</>
}

export default Contracts

Contracts.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
