/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useMemo, useState } from "react"

import * as S from "./styles"

import Button from "components/Button"
import CloseIcon from "components/Icons/Close"
import Modal from "components/Modal"

import { yupResolver } from "@hookform/resolvers/yup"
import AutoCompleteCompany from "components/AutoCompleteCompany"
import AutoCompleteUser from "components/AutoCompleteUser"
import { CompanyAircraftSelect } from "components/SelectCompanyAircraft/SelectCompanyAircraft"
import { CompanyAppSelect } from "components/SelectCompanyApp/SelectCompanyApp"
import { CompanyBctSelect } from "components/SelectCompanyBct/SelectCompanyBct"
import { CompanyMarketSelect } from "components/SelectCompanyMarket/SelectCompanyMarket"
import { ServicesSelect } from "components/SelectCompanyServices/SelectCompanyServices"
import { ProfileSelect } from "components/SelectProfile/SelectProfile"
import { Controller, useForm } from "react-hook-form"
import * as yup from "yup"

type AddRecipientsHelperProps = {
	showAddRecipients: boolean
	setShowAddRecipients: (status: boolean) => void
	closeWithX?: boolean
	onFilters: (filters: Selected[]) => void
	filters?: Selected[]
}

type HandleRemoveFilterParams = {
	filterId: string
}

type Filter = {
	id: string
	value: string
	label: string
	key: string
}

export type Selected = {
	id: string
	filter: Filter[]
}

export enum FilterKeys {
	groupUsers = "user",
	groupCompany = "company",
	groupBct = "bct",
	groupMarket = "market",
	groupAircraft = "aircraft type",
	groupApplication = "application",
	groupProfile = "profile",
	groupService = "job function",
}

const recipients = yup.object({
	groupBct: yup.string(),
	groupMarket: yup.string(),
	groupAircraft: yup.string(),
	groupApplication: yup.string(),
	groupProfile: yup.string(),
	groupService: yup.string(),
	groupUsers: yup.string(),
	groupCompany: yup.string(),
})

type RecipientsType = yup.InferType<typeof recipients>

export const generateId = () => Math.random().toString(36).substring(2, 9)

const AddRecipientsHelper = ({
	setShowAddRecipients,
	showAddRecipients,
	closeWithX,
	onFilters,
	filters = [],
}: AddRecipientsHelperProps) => {
	const [selected, setSelected] = useState<Selected[]>(filters)

	const { handleSubmit, reset, control } = useForm<RecipientsType>({
		resolver: yupResolver(recipients),
	})

	const isOpen = useMemo(() => showAddRecipients, [showAddRecipients])

	const handleSelectAllUsers = () => {
		setSelected((prevState) => [
			...prevState,
			{
				id: generateId(),
				filter: [
					{
						id: generateId(),
						value: "all",
						label: "All users",
						key: "groupAll",
					},
				],
			},
		])
	}

	const handleAdd = handleSubmit((data) => {
		const filter = Object.entries(data)
			.filter(([_, value]) => Boolean(value))
			.map(([key, label]) => {
				const value = label!.split("|")[1].trim()
				const displayLabel = label!.split("|")?.[0]?.toLocaleUpperCase().trim()

				return {
					id: generateId(),
					value,
					label: `${FilterKeys[key as keyof typeof FilterKeys]?.toUpperCase()} "${displayLabel}"`,
					key,
				}
			})

		if (!filter.length) return

		setSelected((prevState) => [
			...prevState,
			{
				id: generateId(),
				filter,
			},
		])

		reset()
	})

	const handleSave = () => {
		onFilters(selected)
		setShowAddRecipients(false)
	}

	const handleClearAll = () => {
		setSelected([])
		reset()
	}

	const handleRemoveFilter = ({ filterId }: HandleRemoveFilterParams) => {
		setSelected((prevState) => prevState.filter(({ id }) => id !== filterId))
	}

	return (
		<Modal showModal={isOpen} setShowModal={setShowAddRecipients} closeWithX={closeWithX}>
			<S.WrapperModal>
				<S.ButtonClose onClick={() => setShowAddRecipients(false)}>
					<CloseIcon />
				</S.ButtonClose>

				<S.Left as="form" onSubmit={handleAdd}>
					<S.WrapperInputs>
						<S.WrapperInput>
							<S.WrapperLabel>
								<S.Label htmlFor="users">User</S.Label>

								<Button variant="tertiary" color="primary" onClick={handleSelectAllUsers}>
									Select all users
								</Button>
							</S.WrapperLabel>

							<Controller
								control={control}
								name="groupUsers"
								render={({ field: { onChange } }) => (
									<AutoCompleteUser
										onChangeValue={({ label, value }) => onChange(`${label} | ${value}`)}
									/>
								)}
							/>
						</S.WrapperInput>

						<S.WrapperInput>
							<S.WrapperLabel>
								<S.Label htmlFor="company">Company</S.Label>
							</S.WrapperLabel>

							<Controller
								control={control}
								name="groupCompany"
								render={({ field: { onChange } }) => (
									<AutoCompleteCompany
										onChangeValue={({ label, value }) => onChange(`${label} | ${value}`)}
									/>
								)}
							/>
						</S.WrapperInput>

						<Controller
							control={control}
							name="groupBct"
							render={({ field: { onChange, value } }) => {
								return (
									<CompanyBctSelect
										id="bct"
										label="BCT"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>

						<Controller
							control={control}
							name="groupMarket"
							render={({ field: { onChange, value } }) => {
								return (
									<CompanyMarketSelect
										id="market"
										label="Market"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>

						<Controller
							control={control}
							name="groupAircraft"
							render={({ field: { onChange, value } }) => {
								return (
									<CompanyAircraftSelect
										id="aircraft-type"
										label="Aircraft type"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>

						<Controller
							control={control}
							name="groupApplication"
							render={({ field: { onChange, value } }) => {
								return (
									<CompanyAppSelect
										id="application"
										label="Application"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>

						<Controller
							control={control}
							name="groupProfile"
							render={({ field: { onChange, value } }) => {
								return (
									<ProfileSelect
										id="Profile"
										label="Profile"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>

						<Controller
							control={control}
							name="groupService"
							render={({ field: { onChange, value } }) => {
								return (
									<ServicesSelect
										id="job-function"
										label="Job function"
										onChangeValue={({ displayValue, value: code }) =>
											onChange(`${displayValue} | ${code}`)
										}
										defaultValue={value?.split("|")[1] || ""}
									/>
								)
							}}
						/>
					</S.WrapperInputs>

					<Button type="submit">Add</Button>
				</S.Left>

				<S.Right>
					<S.Title>Selected recipients</S.Title>

					<S.WrapperSelected>
						<S.WrapperFilters>
							<S.Filter>
								{selected?.map(({ filter, id: filterId }) => (
									<S.Checkbox
										key={filterId}
										id="a"
										defaultChecked
										onChange={() =>
											handleRemoveFilter({
												filterId,
											})
										}
									>
										{filter.map(({ id: idItem, label }, index) => (
											<S.WrapperCheckbox key={idItem}>
												<S.LabelCheckbox>{label}</S.LabelCheckbox>

												{filter.length - 1 !== index && <S.Divider>AND</S.Divider>}
											</S.WrapperCheckbox>
										))}
									</S.Checkbox>
								))}
							</S.Filter>
						</S.WrapperFilters>
						<S.ButtonClearSelected
							variant="tertiary"
							color="primary"
							type="button"
							onClick={handleClearAll}
						>
							Clear all
						</S.ButtonClearSelected>
					</S.WrapperSelected>

					<S.WrapperButtons>
						<Button type="button" onClick={handleSave}>
							Save
						</Button>
						<Button onClick={() => setShowAddRecipients(false)} variant="secondary" type="button">
							Cancel
						</Button>
					</S.WrapperButtons>
				</S.Right>
			</S.WrapperModal>
		</Modal>
	)
}

export default AddRecipientsHelper

type UseAddRecipientsProps = {
	onFilters: (filters: Selected[]) => void
	filters?: Selected[]
}

export function useAddRecipients({ onFilters, filters }: UseAddRecipientsProps) {
	const [showAddRecipients, setShowAddRecipients] = useState(false)

	const AddRecipients = useCallback(() => {
		return (
			<AddRecipientsHelper
				onFilters={onFilters}
				showAddRecipients={showAddRecipients}
				setShowAddRecipients={setShowAddRecipients}
				filters={filters}
			/>
		)
	}, [filters, onFilters, showAddRecipients])

	return useMemo(() => ({ setShowAddRecipients, AddRecipients }), [setShowAddRecipients, AddRecipients])
}
