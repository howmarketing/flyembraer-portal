const optionsTemplate = {
	day: "2-digit",
	month: "2-digit",
	year: "2-digit",
} as Intl.DateTimeFormatOptions

export const formatDate = (date: Date, options: Intl.DateTimeFormatOptions = optionsTemplate) => {
	const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
	const dateFormatted = new Intl.DateTimeFormat("en-US", {
		...options,
		timeZone,
	}).format(date)

	return dateFormatted
}
