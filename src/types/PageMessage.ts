import { MessagesFilter } from "api/message-center/postMessage"

export type PageMessage = {
	totalElements?: number
	totalPages?: number
	size?: number
	content?: Message[]
	number?: number
	sort?: Sort
	numberOfElements?: number
	pageable?: PageableObject
	first?: boolean
	last?: boolean
	empty?: boolean
}

export type Message = {
	id?: number
	title?: string
	htmlMessage?: string
	startDate?: string
	endDate?: string
	alert?: boolean
	messages?: MessagesFilter[]
}
export type Sort = {
	empty?: boolean
	sorted?: boolean
	unsorted?: boolean
}

export type PageableObject = {
	offset?: number
	sort?: Sort
	pageNumber?: number
	pageSize?: number
	paged?: boolean
	unpaged?: boolean
}
