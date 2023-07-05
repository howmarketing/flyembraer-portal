import { LoggedLayout } from "components/Layouts/LoggedLayout"
import type { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
import NewMessageTemplate from "templates/message-center/new-message"

const NewMessage: NextPageWithLayout = () => <NewMessageTemplate />

export default NewMessage

NewMessage.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
