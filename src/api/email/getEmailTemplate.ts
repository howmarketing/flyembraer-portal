import { api } from "services/api"
import { Email } from "types/Email"

type GetEmailTemplateProps = string

export async function GetEmailTemplate(templateCode: GetEmailTemplateProps) {
	const { data } = await api.get<Email>(`/email/template/${templateCode}`)

	return data
}
