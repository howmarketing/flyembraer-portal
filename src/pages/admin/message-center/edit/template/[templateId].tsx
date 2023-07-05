/* eslint-disable react/prop-types */
import { GetMessageTemplateIdResponse, getMessageTemplateId } from "api/message-center/getMessageTemplateId"
import { LoggedLayout } from "components/Layouts/LoggedLayout"
import { GetServerSideProps } from "next"
import type { NextPageWithLayout } from "pages/_app"
import { ReactElement } from "react"
import EditTempalte from "templates/message-center/edit-template"

const EditTemplatePage: NextPageWithLayout = () => <EditTempalte />

export default EditTemplatePage

EditTemplatePage.getLayout = function getLayout(page: ReactElement) {
	return <LoggedLayout>{page}</LoggedLayout>
}
