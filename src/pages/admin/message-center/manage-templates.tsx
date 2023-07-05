import { LoggedLayout } from "components/Layouts/LoggedLayout"
import type { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
import ManageTemplatesTemplate from "templates/message-center/manage-templates"

const ManageTemplates: NextPageWithLayout = () => <ManageTemplatesTemplate />

export default ManageTemplates

ManageTemplates.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
