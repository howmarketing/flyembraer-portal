export type PublicLinkDTO = {
	docs?: DocsNoDocsLinkDTO[]
	noDocs?: DocsNoDocsLinkDTO[]
}

export type DocsNoDocsLinkDTO = {
	menu?: string
	portais?: PortalLinksDTO[]
}

export type PortalLinksDTO = {
	portal?: string
	links?: LinkDTO[]
}

export type LinkDTO = {
	name?: string
	code?: string
	market?: string
}
