/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MessagesFilter } from "api/message-center/postMessage"
import { FilterKeys, Selected, generateId } from "components/modals/AddRecipients"

export const recipientsMapper = (recipients: Selected[]): MessagesFilter[] => {
	const recipientsMapped = recipients.map(({ filter }) => {
		return {
			...filter.reduce((acc, { key, value, label }) => {
				if (key === "groupAll" && value === "all") {
					acc.groupAll = true
				}

				if (key === "groupUsers") {
					// acc.groupUsers = value
					acc.userId = value
					acc.userLabel = label
				}

				if (key === "groupCompany") {
					// acc.groupCompany = value
					acc.companyId = value
					acc.companyLabel = label
				}

				if (key === "groupBct") {
					// acc.groupBct = value
					acc.bctId = value
					acc.bctLabel = label
				}

				if (key === "groupMarket") {
					// acc.groupMarket = value
					acc.marketId = value
					acc.marketLabel = label
				}

				if (key === "groupAircraft") {
					// acc.groupAircraft = value
					acc.aircraftId = value
					acc.aircraftLabel = label
				}

				if (key === "groupApplication") {
					// acc.groupApplication = value
					acc.applicationId = value
					acc.applicationLabel = label
				}

				if (key === "groupService") {
					// acc.groupService = value
					acc.serviceId = value
					acc.serviceLabel = label
				}

				if (key === "groupProfile") {
					// acc.groupProfile = value
					acc.profileId = value
					acc.profileLabel = label
				}

				return acc
			}, {} as MessagesFilter),
		}
	})

	return recipientsMapped
}

// type Filter = {
//   id: string
//   value: string
//   label: string
//   key: string
// }

// export type Selected = {
//   id: string
//   filter: Filter[]
// }

export const recipientsMapperToSelected = (recipients: MessagesFilter[]) => {
	const recipientsMapped = recipients
		.map((recipient) => {
			const filter = Object.entries(recipient).reduce((acc, [key, value]) => {
				if (key === "groupAll" && value) {
					acc.push({
						id: generateId(),
						key,
						value: "all",
						label: "All Users",
					})
				}

				if (key === "userId" && value) {
					acc.push({
						id: generateId(),
						key: "groupUsers",
						value: value as string,
						label: `USER "${recipient.userLabel}"`,
					})
				}

				if (key === "companyId" && value) {
					acc.push({
						id: generateId(),
						key: "groupCompany",
						value: value as string,
						label: `COMPANY "${recipient.companyLabel}"`,
					})
				}

				if (key === "bctId" && value) {
					acc.push({
						id: generateId(),
						key: "groupBct",
						value: value as string,
						label: `BCT "${recipient.bctLabel}"`,
					})
				}

				if (key === "marketId" && value) {
					acc.push({
						id: generateId(),
						key: "groupMarket",
						value: value as string,
						label: `MARKET "${recipient.marketLabel}"`,
					})
				}

				if (key === "aircraftId" && value) {
					acc.push({
						id: generateId(),
						key: "groupAircraft",
						value: value as string,
						label: `AIRCRAFT TYPE "${recipient.aircraftLabel}"`,
					})
				}

				if (key === "applicationId" && value) {
					acc.push({
						id: generateId(),
						key: "groupApplication",
						value: value as string,
						label: `APPLICATION "${recipient.applicationLabel}"`,
					})
				}

				if (key === "serviceId" && value) {
					acc.push({
						id: generateId(),
						key: "groupService",
						value: value as string,
						label: `JOB FUNCTION "${recipient.serviceLabel}"`,
					})
				}

				if (key === "profileId" && value) {
					acc.push({
						id: generateId(),
						key: "groupProfile",
						value: value as string,
						label: `PROFILE "${recipient.profileLabel}"`,
					})
				}

				return acc
			}, [] as Selected["filter"])

			return {
				id: generateId(),
				filter,
			}
		})
		.filter(({ filter }) => filter.length > 0)

	return recipientsMapped
}
