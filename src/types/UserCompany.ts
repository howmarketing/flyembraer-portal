export type AllUsersCompany = UserCompany[]

export type UserCompany = {
	user_dn?: string
	user_cn?: string
	user_displayName?: string
	user_telephoneNumber?: string
	user_mail?: string
	user_embStatus?: string
	user_embApprovalDate?: string
	user_embApprovalUser_name?: string
	user_embLastDateStatus?: string
	company_dn?: string
	company_displayName?: string
	company_co?: string
	company_st?: string
	company_location?: string
	company_streetAddress?: string
	company_embStatus?: string
	company_embApprovalDate?: string
	company_embApprovalUser_name?: string
	company_lastupdatedate?: string
}
