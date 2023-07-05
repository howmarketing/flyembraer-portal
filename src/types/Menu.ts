export type Menu = {
	id?: number
	name?: string
	order?: number
	subMenus?: SubMenuDTO[]
	//additional
	link?: string
}

export type SubMenuDTO = {
	id: number
	name: string
	order?: number
	openNewPage?: boolean
	additionalSubMenus?: AdditionalSubMenus[]
	link?: string
}

export type AdditionalSubMenus = {
	id?: number
	name?: string
	order?: number
	openNewPage?: boolean
	link?: string
}
