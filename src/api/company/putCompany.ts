import { api } from "services/api"
import { UpdateCompanyDto } from "types/UpdateCompanyDTO"

type PutServiceProps = UpdateCompanyDto

export async function PutCompany(props: PutServiceProps) {
	const body = JSON.stringify(props)

	const { data } = await api.put<string>("https://portal.dev.flyembraer.com/api/v1/portal/company", body, {
		headers: {
			"Content-Type": "application/json",
		},
	})
	return data
}
