/* eslint-disable react/prop-types */
import { getMessageUserId } from "api/message-center/getMessageUserId"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { GetServerSideProps } from "next"
import type { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
import NewMessageTemplate from "templates/message-center/new-message"
import { MessageUser } from "types/MessageUser"

const EditMessage: NextPageWithLayout = () => <NewMessageTemplate edit />

export default EditMessage

EditMessage.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
