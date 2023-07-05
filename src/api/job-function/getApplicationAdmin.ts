import { api } from "services/api"
import { ContentAdminAppDTO } from "types/ContentAdminAppDTO"
type ContentAdminAppDTOarray = ContentAdminAppDTO[]
export async function GetApplicationAdmin() {
	const { data } = await api.get<ContentAdminAppDTOarray>("/application/admin")

	return data
}
