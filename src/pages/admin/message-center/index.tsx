import type { NextPageWithLayout } from "pages/_app"

import { ReactElement } from "react"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import ManageMessagesTemplate from "templates/message-center/manage-messages"

const ManageMessages: NextPageWithLayout = () => <ManageMessagesTemplate />

export default ManageMessages

ManageMessages.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
